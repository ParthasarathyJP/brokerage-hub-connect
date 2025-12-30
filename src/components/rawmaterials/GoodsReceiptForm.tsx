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
  grnNumber: z.string().min(1, "GRN number is required"),
  grnDate: z.string().min(1, "GRN date is required"),
  poNumber: z.string().min(1, "PO number is required"),
  supplierName: z.string().min(1, "Supplier name is required"),
  supplierInvoice: z.string().optional(),
  invoiceDate: z.string().optional(),
  vehicleNumber: z.string().optional(),
  driverName: z.string().optional(),
  receivedBy: z.string().min(1, "Receiver name is required"),
  warehouseLocation: z.string().min(1, "Warehouse location is required"),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LineItem {
  id: string;
  materialName: string;
  materialCode: string;
  batchNumber: string;
  orderedQty: string;
  receivedQty: string;
  unit: string;
  condition: string;
  storageLocation: string;
}

const GoodsReceiptForm = () => {
  const { toast } = useToast();
  const [lineItems, setLineItems] = useState<LineItem[]>([
    {
      id: "1",
      materialName: "",
      materialCode: "",
      batchNumber: "",
      orderedQty: "",
      receivedQty: "",
      unit: "",
      condition: "",
      storageLocation: "",
    },
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grnNumber: `GRN-${Date.now().toString().slice(-6)}`,
      grnDate: new Date().toISOString().split("T")[0],
      poNumber: "",
      supplierName: "",
      supplierInvoice: "",
      invoiceDate: "",
      vehicleNumber: "",
      driverName: "",
      receivedBy: "",
      warehouseLocation: "",
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
        orderedQty: "",
        receivedQty: "",
        unit: "",
        condition: "",
        storageLocation: "",
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
      lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const onSubmit = (data: FormData) => {
    console.log("Goods Receipt:", { ...data, lineItems });
    toast({
      title: "Goods Receipt Created",
      description: `GRN ${data.grnNumber} has been recorded successfully.`,
    });
    form.reset();
    setLineItems([
      {
        id: "1",
        materialName: "",
        materialCode: "",
        batchNumber: "",
        orderedQty: "",
        receivedQty: "",
        unit: "",
        condition: "",
        storageLocation: "",
      },
    ]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Receipt Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="grnNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GRN Number</FormLabel>
                  <FormControl>
                    <Input {...field} readOnly className="bg-muted" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="grnDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receipt Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="poNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PO Reference Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter PO number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="supplierName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter supplier name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="supplierInvoice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier Invoice Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter invoice number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="invoiceDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transport Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="vehicleNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter vehicle number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="driverName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Driver Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter driver name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="warehouseLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Warehouse / Storage Location</FormLabel>
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
                    <label className="text-sm font-medium">Ordered Qty</label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.orderedQty}
                      onChange={(e) =>
                        updateLineItem(item.id, "orderedQty", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Received Qty</label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.receivedQty}
                      onChange={(e) =>
                        updateLineItem(item.id, "receivedQty", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Condition</label>
                    <select
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={item.condition}
                      onChange={(e) =>
                        updateLineItem(item.id, "condition", e.target.value)
                      }
                    >
                      <option value="">Select condition</option>
                      <option value="good">Good</option>
                      <option value="acceptable">Acceptable</option>
                      <option value="damaged">Damaged</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Storage Bin</label>
                    <Input
                      placeholder="Bin/Rack location"
                      value={item.storageLocation}
                      onChange={(e) =>
                        updateLineItem(item.id, "storageLocation", e.target.value)
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
            <CardTitle>Receipt Confirmation</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="receivedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Received By</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter receiver name" {...field} />
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
                    <Textarea placeholder="Any observations or notes" {...field} />
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
          <Button type="submit">Create Goods Receipt</Button>
        </div>
      </form>
    </Form>
  );
};

export default GoodsReceiptForm;
