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
import { Receipt, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  invoiceNumber: z.string().min(1, "Invoice number is required"),
  invoiceDate: z.string().min(1, "Invoice date is required"),
  dueDate: z.string().min(1, "Due date is required"),
  invoiceType: z.string().min(1, "Invoice type is required"),
  sellerName: z.string().min(1, "Seller name is required"),
  sellerAddress: z.string().min(1, "Seller address is required"),
  sellerGst: z.string().min(1, "Seller GST is required"),
  buyerName: z.string().min(1, "Buyer name is required"),
  buyerAddress: z.string().min(1, "Buyer address is required"),
  buyerGst: z.string().optional(),
  poReference: z.string().optional(),
  bankName: z.string().optional(),
  accountNumber: z.string().optional(),
  ifscCode: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LineItem {
  id: string;
  description: string;
  hsn: string;
  quantity: string;
  unit: string;
  rate: string;
  gstPercent: string;
  amount: number;
  gstAmount: number;
  total: number;
}

const InvoiceForm = () => {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: "1", description: "", hsn: "", quantity: "", unit: "", rate: "", gstPercent: "18", amount: 0, gstAmount: 0, total: 0 }
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invoiceNumber: `INV-${Date.now()}`,
      invoiceDate: new Date().toISOString().split("T")[0],
      dueDate: "",
      invoiceType: "tax_invoice",
      sellerName: "",
      sellerAddress: "",
      sellerGst: "",
      buyerName: "",
      buyerAddress: "",
      buyerGst: "",
      poReference: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      notes: "",
    },
  });

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: Date.now().toString(), description: "", hsn: "", quantity: "", unit: "", rate: "", gstPercent: "18", amount: 0, gstAmount: 0, total: 0 }
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
        const qty = parseFloat(updated.quantity || "0");
        const rate = parseFloat(updated.rate || "0");
        const gstPercent = parseFloat(updated.gstPercent || "0");
        updated.amount = qty * rate;
        updated.gstAmount = (updated.amount * gstPercent) / 100;
        updated.total = updated.amount + updated.gstAmount;
        return updated;
      }
      return item;
    }));
  };

  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0);
  const totalGst = lineItems.reduce((sum, item) => sum + item.gstAmount, 0);
  const grandTotal = subtotal + totalGst;

  const onSubmit = (data: FormData) => {
    console.log("Invoice:", { ...data, lineItems, subtotal, totalGst, grandTotal });
    toast({
      title: "Invoice Generated",
      description: `Invoice ${data.invoiceNumber} has been created successfully.`,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Receipt className="h-5 w-5 text-primary" />
              Invoice Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="invoiceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Type *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tax_invoice">Tax Invoice</SelectItem>
                      <SelectItem value="bill_of_supply">Bill of Supply</SelectItem>
                      <SelectItem value="proforma">Proforma Invoice</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="invoiceNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Number *</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date *</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Seller Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="sellerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sellerAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Full address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sellerGst"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GSTIN *</FormLabel>
                    <FormControl>
                      <Input placeholder="GST Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Buyer Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="buyerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Buyer company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="buyerAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Full address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="buyerGst"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GSTIN</FormLabel>
                    <FormControl>
                      <Input placeholder="GST Number (if registered)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Items</CardTitle>
            <Button type="button" variant="outline" size="sm" onClick={addLineItem}>
              <Plus className="h-4 w-4 mr-2" /> Add Item
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 overflow-x-auto">
              {lineItems.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 items-end min-w-[800px]">
                  <div className="col-span-3">
                    <label className="text-sm font-medium">Description</label>
                    <Input
                      placeholder="Item description"
                      value={item.description}
                      onChange={(e) => updateLineItem(item.id, "description", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">HSN</label>
                    <Input
                      placeholder="HSN"
                      value={item.hsn}
                      onChange={(e) => updateLineItem(item.id, "hsn", e.target.value)}
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
                  <div className="col-span-1">
                    <label className="text-sm font-medium">Rate</label>
                    <Input
                      type="number"
                      value={item.rate}
                      onChange={(e) => updateLineItem(item.id, "rate", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">GST %</label>
                    <Input
                      type="number"
                      value={item.gstPercent}
                      onChange={(e) => updateLineItem(item.id, "gstPercent", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">Amount</label>
                    <Input value={`₹${item.amount.toFixed(2)}`} disabled />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">GST</label>
                    <Input value={`₹${item.gstAmount.toFixed(2)}`} disabled />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">Total</label>
                    <Input value={`₹${item.total.toFixed(2)}`} disabled />
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
              <div className="flex justify-end pt-4 border-t border-border space-x-8">
                <div className="text-sm">Subtotal: ₹{subtotal.toFixed(2)}</div>
                <div className="text-sm">GST: ₹{totalGst.toFixed(2)}</div>
                <div className="text-lg font-semibold">Grand Total: ₹{grandTotal.toFixed(2)}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Bank Details & Notes</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="poReference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PO Reference</FormLabel>
                  <FormControl>
                    <Input placeholder="PO-XXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bankName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Bank name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Account no." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ifscCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IFSC Code</FormLabel>
                  <FormControl>
                    <Input placeholder="IFSC" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem className="md:col-span-4">
                  <FormLabel>Terms & Notes</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Payment terms, conditions..." {...field} />
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
            Generate Invoice
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InvoiceForm;
