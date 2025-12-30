import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2 } from "lucide-react";

const formSchema = z.object({
  adjustmentNumber: z.string().min(1, "Adjustment number is required"),
  adjustmentDate: z.string().min(1, "Adjustment date is required"),
  adjustmentType: z.string().min(1, "Adjustment type is required"),
  warehouse: z.string().min(1, "Warehouse is required"),
  adjustedBy: z.string().min(1, "Adjusted by is required"),
  approvedBy: z.string().optional(),
  reason: z.string().min(1, "Reason is required"),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LineItem {
  id: string;
  materialName: string;
  materialCode: string;
  batchNumber: string;
  currentStock: string;
  adjustedStock: string;
  unit: string;
  difference: string;
  reason: string;
}

const RawMaterialInventoryForm = () => {
  const { toast } = useToast();
  const [lineItems, setLineItems] = useState<LineItem[]>([
    {
      id: "1",
      materialName: "",
      materialCode: "",
      batchNumber: "",
      currentStock: "",
      adjustedStock: "",
      unit: "",
      difference: "0",
      reason: "",
    },
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adjustmentNumber: `RMA-${Date.now().toString().slice(-6)}`,
      adjustmentDate: new Date().toISOString().split("T")[0],
      adjustmentType: "",
      warehouse: "",
      adjustedBy: "",
      approvedBy: "",
      reason: "",
      remarks: "",
    },
  });

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      {
        id: Date.now().toString(),
        materialName: "",
        materialCode: "",
        batchNumber: "",
        currentStock: "",
        adjustedStock: "",
        unit: "",
        difference: "0",
        reason: "",
      },
    ]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter((item) => item.id !== id));
    }
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: string) => {
    setLineItems(
      lineItems.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: value };
          if (field === "currentStock" || field === "adjustedStock") {
            const current = parseFloat(updated.currentStock) || 0;
            const adjusted = parseFloat(updated.adjustedStock) || 0;
            updated.difference = (adjusted - current).toString();
          }
          return updated;
        }
        return item;
      })
    );
  };

  const onSubmit = (data: FormData) => {
    console.log("Raw Material Inventory Adjustment:", { ...data, lineItems });
    toast({
      title: "Adjustment Recorded",
      description: `Inventory adjustment ${data.adjustmentNumber} has been submitted.`,
    });
    form.reset();
    setLineItems([
      {
        id: "1",
        materialName: "",
        materialCode: "",
        batchNumber: "",
        currentStock: "",
        adjustedStock: "",
        unit: "",
        difference: "0",
        reason: "",
      },
    ]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Adjustment Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="adjustmentNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adjustment Number</FormLabel>
                  <FormControl>
                    <Input {...field} readOnly className="bg-muted" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adjustmentDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adjustment Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adjustmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adjustment Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="shrinkage">Shrinkage</SelectItem>
                      <SelectItem value="wastage">Wastage</SelectItem>
                      <SelectItem value="expiry">Expiry/Spoilage</SelectItem>
                      <SelectItem value="damage">Damage</SelectItem>
                      <SelectItem value="reclassification">Reclassification</SelectItem>
                      <SelectItem value="physical-count">Physical Count Correction</SelectItem>
                      <SelectItem value="production-consumption">Production Consumption</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="warehouse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Warehouse / Location</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select warehouse" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="warehouse-a">Warehouse A - Main</SelectItem>
                      <SelectItem value="warehouse-b">Warehouse B - Secondary</SelectItem>
                      <SelectItem value="cold-storage">Cold Storage Unit</SelectItem>
                      <SelectItem value="chemical-store">Chemical Storage</SelectItem>
                      <SelectItem value="bulk-yard">Bulk Yard</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adjustedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adjusted By</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="approvedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Approved By</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter approver name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Material Line Items</CardTitle>
            <Button type="button" variant="outline" size="sm" onClick={addLineItem}>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {lineItems.map((item, index) => (
              <div key={item.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">Item {index + 1}</span>
                  {lineItems.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeLineItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium">Material Name</label>
                    <Input
                      placeholder="Enter material name"
                      value={item.materialName}
                      onChange={(e) =>
                        updateLineItem(item.id, "materialName", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Material Code</label>
                    <Input
                      placeholder="Enter code"
                      value={item.materialCode}
                      onChange={(e) =>
                        updateLineItem(item.id, "materialCode", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Batch Number</label>
                    <Input
                      placeholder="Enter batch"
                      value={item.batchNumber}
                      onChange={(e) =>
                        updateLineItem(item.id, "batchNumber", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Unit</label>
                    <Input
                      placeholder="kg, tons, liters"
                      value={item.unit}
                      onChange={(e) =>
                        updateLineItem(item.id, "unit", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Current Stock</label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.currentStock}
                      onChange={(e) =>
                        updateLineItem(item.id, "currentStock", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Adjusted Stock</label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.adjustedStock}
                      onChange={(e) =>
                        updateLineItem(item.id, "adjustedStock", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Difference</label>
                    <Input
                      readOnly
                      className={`bg-muted ${
                        parseFloat(item.difference) < 0
                          ? "text-destructive"
                          : parseFloat(item.difference) > 0
                          ? "text-green-600"
                          : ""
                      }`}
                      value={item.difference}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Item Reason</label>
                    <Input
                      placeholder="Specific reason"
                      value={item.reason}
                      onChange={(e) =>
                        updateLineItem(item.id, "reason", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Justification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Reason for Adjustment</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe why this adjustment is necessary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Remarks</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any other notes or observations" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Submit Adjustment</Button>
        </div>
      </form>
    </Form>
  );
};

export default RawMaterialInventoryForm;
