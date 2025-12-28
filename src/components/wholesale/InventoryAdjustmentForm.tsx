import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { toast } from "@/hooks/use-toast";
import { ClipboardList, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  adjustmentNumber: z.string().min(1, "Adjustment number is required"),
  adjustmentDate: z.string().min(1, "Date is required"),
  adjustmentType: z.string().min(1, "Adjustment type is required"),
  warehouse: z.string().min(1, "Warehouse is required"),
  reason: z.string().min(1, "Reason is required"),
  adjustedBy: z.string().min(1, "Adjusted by is required"),
  approvedBy: z.string().optional(),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LineItem {
  id: string;
  productName: string;
  sku: string;
  batchNumber: string;
  currentStock: string;
  adjustedStock: string;
  difference: number;
  reason: string;
}

const InventoryAdjustmentForm = () => {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: "1", productName: "", sku: "", batchNumber: "", currentStock: "", adjustedStock: "", difference: 0, reason: "" }
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adjustmentNumber: `ADJ-${Date.now()}`,
      adjustmentDate: new Date().toISOString().split("T")[0],
      adjustmentType: "",
      warehouse: "",
      reason: "",
      adjustedBy: "",
      approvedBy: "",
      remarks: "",
    },
  });

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: Date.now().toString(), productName: "", sku: "", batchNumber: "", currentStock: "", adjustedStock: "", difference: 0, reason: "" }
    ]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter(item => item.id !== id));
    }
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: string) => {
    setLineItems(lineItems.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: value };
        if (field === "currentStock" || field === "adjustedStock") {
          const current = parseFloat(updated.currentStock || "0");
          const adjusted = parseFloat(updated.adjustedStock || "0");
          updated.difference = adjusted - current;
        }
        return updated;
      }
      return item;
    }));
  };

  const onSubmit = (data: FormData) => {
    console.log("Inventory Adjustment:", { ...data, lineItems });
    toast({
      title: "Adjustment Recorded",
      description: `Adjustment ${data.adjustmentNumber} has been saved.`,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ClipboardList className="h-5 w-5 text-primary" />
              Adjustment Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="adjustmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adjustment Type *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="shrinkage">Shrinkage</SelectItem>
                      <SelectItem value="wastage">Wastage</SelectItem>
                      <SelectItem value="damage">Damage</SelectItem>
                      <SelectItem value="expiry">Expiry</SelectItem>
                      <SelectItem value="correction">Stock Correction</SelectItem>
                      <SelectItem value="found">Stock Found</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adjustmentNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adjustment Number *</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Date *</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="warehouse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Warehouse *</FormLabel>
                  <FormControl>
                    <Input placeholder="Warehouse name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Items to Adjust</CardTitle>
            <Button type="button" variant="outline" size="sm" onClick={addLineItem}>
              <Plus className="h-4 w-4 mr-2" /> Add Item
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lineItems.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 items-end">
                  <div className="col-span-2">
                    <label className="text-sm font-medium">Product</label>
                    <Input
                      placeholder="Product name"
                      value={item.productName}
                      onChange={(e) => updateLineItem(item.id, "productName", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">SKU</label>
                    <Input
                      placeholder="SKU"
                      value={item.sku}
                      onChange={(e) => updateLineItem(item.id, "sku", e.target.value)}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium">Batch</label>
                    <Input
                      placeholder="Batch No."
                      value={item.batchNumber}
                      onChange={(e) => updateLineItem(item.id, "batchNumber", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">Current</label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.currentStock}
                      onChange={(e) => updateLineItem(item.id, "currentStock", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">Adjusted</label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.adjustedStock}
                      onChange={(e) => updateLineItem(item.id, "adjustedStock", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">Diff</label>
                    <Input 
                      value={item.difference} 
                      disabled 
                      className={item.difference < 0 ? "text-destructive" : "text-green-600"}
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="text-sm font-medium">Reason</label>
                    <Input
                      placeholder="Reason for adjustment"
                      value={item.reason}
                      onChange={(e) => updateLineItem(item.id, "reason", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeLineItem(item.id)}
                      disabled={lineItems.length === 1}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overall Reason *</FormLabel>
                  <FormControl>
                    <Input placeholder="Main reason" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adjustedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adjusted By *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
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
                    <Input placeholder="Approver name" {...field} />
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
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Input placeholder="Additional notes" {...field} />
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
          <Button type="submit" className="gradient-primary text-primary-foreground">
            Save Adjustment
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InventoryAdjustmentForm;
