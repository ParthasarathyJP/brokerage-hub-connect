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
import { CreditCard, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  noteType: z.string().min(1, "Note type is required"),
  noteNumber: z.string().min(1, "Note number is required"),
  noteDate: z.string().min(1, "Date is required"),
  originalInvoice: z.string().min(1, "Original invoice is required"),
  originalInvoiceDate: z.string().min(1, "Invoice date is required"),
  partyName: z.string().min(1, "Party name is required"),
  partyAddress: z.string().min(1, "Address is required"),
  partyGst: z.string().optional(),
  reason: z.string().min(1, "Reason is required"),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LineItem {
  id: string;
  description: string;
  hsn: string;
  quantity: string;
  rate: string;
  gstPercent: string;
  amount: number;
  gstAmount: number;
  total: number;
}

const CreditDebitNoteForm = () => {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: "1", description: "", hsn: "", quantity: "", rate: "", gstPercent: "18", amount: 0, gstAmount: 0, total: 0 }
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      noteType: "",
      noteNumber: `CN-${Date.now()}`,
      noteDate: new Date().toISOString().split("T")[0],
      originalInvoice: "",
      originalInvoiceDate: "",
      partyName: "",
      partyAddress: "",
      partyGst: "",
      reason: "",
      remarks: "",
    },
  });

  const noteType = form.watch("noteType");

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: Date.now().toString(), description: "", hsn: "", quantity: "", rate: "", gstPercent: "18", amount: 0, gstAmount: 0, total: 0 }
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

  const grandTotal = lineItems.reduce((sum, item) => sum + item.total, 0);

  const onSubmit = (data: FormData) => {
    console.log("Credit/Debit Note:", { ...data, lineItems, grandTotal });
    toast({
      title: `${data.noteType === "credit" ? "Credit" : "Debit"} Note Created`,
      description: `Note ${data.noteNumber} has been generated.`,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CreditCard className="h-5 w-5 text-primary" />
              Note Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="noteType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note Type *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="credit">Credit Note</SelectItem>
                      <SelectItem value="debit">Debit Note</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="noteNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note Number *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="noteDate"
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
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select reason" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="return">Sales Return</SelectItem>
                      <SelectItem value="discount">Post-Sale Discount</SelectItem>
                      <SelectItem value="deficiency">Deficiency in Services</SelectItem>
                      <SelectItem value="correction">Invoice Correction</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Original Invoice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Party Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="partyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Party Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Company / party name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="partyAddress"
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
              <FormField
                control={form.control}
                name="partyGst"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GSTIN</FormLabel>
                    <FormControl>
                      <Input placeholder="GST Number" {...field} />
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
            <CardTitle className="text-lg">Adjustment Items</CardTitle>
            <Button type="button" variant="outline" size="sm" onClick={addLineItem}>
              <Plus className="h-4 w-4 mr-2" /> Add Item
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lineItems.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 items-end">
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
                  <div className="col-span-2">
                    <label className="text-sm font-medium">Rate (₹)</label>
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
              <div className="flex justify-end pt-4 border-t border-border">
                <div className="text-lg font-semibold">
                  {noteType === "credit" ? "Credit" : "Debit"} Total: ₹{grandTotal.toFixed(2)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Additional notes or terms..." {...field} />
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
            Generate Note
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreditDebitNoteForm;
