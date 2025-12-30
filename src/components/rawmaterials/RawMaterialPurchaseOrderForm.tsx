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
  poNumber: z.string().min(1, "PO number is required"),
  poDate: z.string().min(1, "PO date is required"),
  deliveryDate: z.string().min(1, "Delivery date is required"),
  supplierName: z.string().min(1, "Supplier name is required"),
  supplierCode: z.string().optional(),
  supplierAddress: z.string().optional(),
  supplierContact: z.string().optional(),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  paymentTerms: z.string().min(1, "Payment terms required"),
  currency: z.string().min(1, "Currency is required"),
  preparedBy: z.string().min(1, "Prepared by is required"),
  approvedBy: z.string().optional(),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LineItem {
  id: string;
  materialCategory: string;
  materialName: string;
  materialCode: string;
  specifications: string;
  quantity: string;
  unit: string;
  unitPrice: string;
  total: string;
}

const materialCategories = [
  { value: "metals", label: "Metals" },
  { value: "minerals", label: "Minerals" },
  { value: "chemicals", label: "Chemicals" },
  { value: "agricultural", label: "Agricultural Products" },
  { value: "fibers", label: "Natural Fibers" },
  { value: "energy", label: "Energy-related" },
];

const RawMaterialPurchaseOrderForm = () => {
  const { toast } = useToast();
  const [lineItems, setLineItems] = useState<LineItem[]>([
    {
      id: "1",
      materialCategory: "",
      materialName: "",
      materialCode: "",
      specifications: "",
      quantity: "",
      unit: "",
      unitPrice: "",
      total: "0",
    },
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      poNumber: `RMPO-${Date.now().toString().slice(-6)}`,
      poDate: new Date().toISOString().split("T")[0],
      deliveryDate: "",
      supplierName: "",
      supplierCode: "",
      supplierAddress: "",
      supplierContact: "",
      deliveryAddress: "",
      paymentTerms: "",
      currency: "INR",
      preparedBy: "",
      approvedBy: "",
      remarks: "",
    },
  });

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      {
        id: Date.now().toString(),
        materialCategory: "",
        materialName: "",
        materialCode: "",
        specifications: "",
        quantity: "",
        unit: "",
        unitPrice: "",
        total: "0",
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
          if (field === "quantity" || field === "unitPrice") {
            const qty = parseFloat(updated.quantity) || 0;
            const price = parseFloat(updated.unitPrice) || 0;
            updated.total = (qty * price).toFixed(2);
          }
          return updated;
        }
        return item;
      })
    );
  };

  const grandTotal = lineItems.reduce(
    (sum, item) => sum + (parseFloat(item.total) || 0),
    0
  );

  const onSubmit = (data: FormData) => {
    console.log("Raw Material Purchase Order:", { ...data, lineItems, grandTotal });
    toast({
      title: "Purchase Order Created",
      description: `PO ${data.poNumber} has been generated successfully.`,
    });
    form.reset();
    setLineItems([
      {
        id: "1",
        materialCategory: "",
        materialName: "",
        materialCode: "",
        specifications: "",
        quantity: "",
        unit: "",
        unitPrice: "",
        total: "0",
      },
    ]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="poNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PO Number</FormLabel>
                  <FormControl>
                    <Input {...field} readOnly className="bg-muted" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="poDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PO Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deliveryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Delivery Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="INR">INR (₹)</SelectItem>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paymentTerms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Terms</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select terms" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="advance">100% Advance</SelectItem>
                      <SelectItem value="cod">Cash on Delivery</SelectItem>
                      <SelectItem value="net30">Net 30 Days</SelectItem>
                      <SelectItem value="net60">Net 60 Days</SelectItem>
                      <SelectItem value="lc">Letter of Credit</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Supplier Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              name="supplierCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter supplier code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="supplierAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter supplier address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="supplierContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier Contact</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone / Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deliveryAddress"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter delivery location" {...field} />
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
                    <label className="text-sm font-medium">Category</label>
                    <select
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={item.materialCategory}
                      onChange={(e) =>
                        updateLineItem(item.id, "materialCategory", e.target.value)
                      }
                    >
                      <option value="">Select category</option>
                      {materialCategories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Material Name</label>
                    <Input
                      placeholder="e.g., Iron Ore"
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
                    <label className="text-sm font-medium">Specifications</label>
                    <Input
                      placeholder="Grade, purity, etc."
                      value={item.specifications}
                      onChange={(e) =>
                        updateLineItem(item.id, "specifications", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Quantity</label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.quantity}
                      onChange={(e) =>
                        updateLineItem(item.id, "quantity", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Unit</label>
                    <select
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={item.unit}
                      onChange={(e) =>
                        updateLineItem(item.id, "unit", e.target.value)
                      }
                    >
                      <option value="">Select unit</option>
                      <option value="kg">Kilograms (kg)</option>
                      <option value="ton">Metric Tons</option>
                      <option value="ltr">Liters</option>
                      <option value="bbl">Barrels</option>
                      <option value="bags">Bags</option>
                      <option value="drums">Drums</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Unit Price</label>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={item.unitPrice}
                      onChange={(e) =>
                        updateLineItem(item.id, "unitPrice", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Total</label>
                    <Input readOnly className="bg-muted font-medium" value={item.total} />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-end pt-4 border-t">
              <div className="text-right">
                <span className="text-sm text-muted-foreground">Grand Total: </span>
                <span className="text-xl font-bold">₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Authorization</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="preparedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prepared By</FormLabel>
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
            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Remarks / Special Instructions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any special terms or instructions" {...field} />
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
          <Button type="submit">Generate Purchase Order</Button>
        </div>
      </form>
    </Form>
  );
};

export default RawMaterialPurchaseOrderForm;
