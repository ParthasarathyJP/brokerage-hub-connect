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
import { RotateCcw, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  returnNumber: z.string().min(1, "Return number is required"),
  returnDate: z.string().min(1, "Date is required"),
  returnType: z.string().min(1, "Return type is required"),
  originalInvoice: z.string().min(1, "Original invoice is required"),
  originalInvoiceDate: z.string().min(1, "Invoice date is required"),
  retailerName: z.string().min(1, "Retailer name is required"),
  retailerAddress: z.string().min(1, "Address is required"),
  retailerPhone: z.string().min(10, "Valid phone required"),
  supplierName: z.string().min(1, "Supplier name is required"),
  returnReason: z.string().min(1, "Return reason is required"),
  actionRequested: z.string().min(1, "Action is required"),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LineItem {
  id: string;
  productName: string;
  batchNumber: string;
  quantity: string;
  unit: string;
  reason: string;
  condition: string;
}

const ReturnForm = () => {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: "1", productName: "", batchNumber: "", quantity: "", unit: "", reason: "", condition: "" }
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      returnNumber: `RET-${Date.now()}`,
      returnDate: new Date().toISOString().split("T")[0],
      returnType: "",
      originalInvoice: "",
      originalInvoiceDate: "",
      retailerName: "",
      retailerAddress: "",
      retailerPhone: "",
      supplierName: "",
      returnReason: "",
      actionRequested: "",
      remarks: "",
    },
  });

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: Date.now().toString(), productName: "", batchNumber: "", quantity: "", unit: "", reason: "", condition: "" }
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
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const onSubmit = (data: FormData) => {
    console.log("Return Form:", { ...data, lineItems });
    toast({
      title: "Return Request Created",
      description: `Return ${data.returnNumber} has been submitted.`,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <RotateCcw className="h-5 w-5 text-primary" />
              Return Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="returnType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return Type *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="damaged">Damaged Goods</SelectItem>
                      <SelectItem value="expired">Expired Products</SelectItem>
                      <SelectItem value="defective">Defective Items</SelectItem>
                      <SelectItem value="unsold">Unsold Stock</SelectItem>
                      <SelectItem value="wrong_delivery">Wrong Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="returnNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return Number *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="returnDate"
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
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Original Invoice Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="originalInvoice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="INV-XXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="originalInvoiceDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Date *</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
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
                  <FormLabel>Supplier Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Supplier company" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Retailer Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="retailerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Retailer Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Store / retailer name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="retailerPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone *</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="retailerAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="Full address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Return Items</CardTitle>
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
                  <div className="col-span-2">
                    <label className="text-sm font-medium">Batch No.</label>
                    <Input
                      placeholder="Batch"
                      value={item.batchNumber}
                      onChange={(e) => updateLineItem(item.id, "batchNumber", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">Qty</label>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateLineItem(item.id, "quantity", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">Unit</label>
                    <Input
                      placeholder="pcs"
                      value={item.unit}
                      onChange={(e) => updateLineItem(item.id, "unit", e.target.value)}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium">Reason</label>
                    <Input
                      placeholder="Damage reason"
                      value={item.reason}
                      onChange={(e) => updateLineItem(item.id, "reason", e.target.value)}
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="text-sm font-medium">Condition</label>
                    <Input
                      placeholder="Current condition"
                      value={item.condition}
                      onChange={(e) => updateLineItem(item.id, "condition", e.target.value)}
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
          <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="returnReason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overall Return Reason *</FormLabel>
                  <FormControl>
                    <Input placeholder="Main reason for return" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="actionRequested"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Action Requested *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select action" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="replacement">Replacement</SelectItem>
                      <SelectItem value="refund">Full Refund</SelectItem>
                      <SelectItem value="credit_note">Credit Note</SelectItem>
                      <SelectItem value="repair">Repair & Return</SelectItem>
                    </SelectContent>
                  </Select>
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
            Submit Return
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ReturnForm;
