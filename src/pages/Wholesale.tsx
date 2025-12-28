import { useState } from "react";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Package, FileText, Receipt, Truck, RotateCcw, CreditCard, ArrowRightLeft, Building2, Users, ClipboardList, Banknote, FileSpreadsheet } from "lucide-react";
import WholesaleProductForm from "@/components/wholesale/WholesaleProductForm";
import PurchaseOrderForm from "@/components/wholesale/PurchaseOrderForm";
import InvoiceForm from "@/components/wholesale/InvoiceForm";
import QuotationForm from "@/components/wholesale/QuotationForm";
import DeliveryChallanForm from "@/components/wholesale/DeliveryChallanForm";
import ReturnForm from "@/components/wholesale/ReturnForm";
import CreditDebitNoteForm from "@/components/wholesale/CreditDebitNoteForm";
import StockTransferForm from "@/components/wholesale/StockTransferForm";
import SupplierRegistrationForm from "@/components/wholesale/SupplierRegistrationForm";
import CustomerRegistrationForm from "@/components/wholesale/CustomerRegistrationForm";
import InventoryAdjustmentForm from "@/components/wholesale/InventoryAdjustmentForm";
import PaymentReceiptForm from "@/components/wholesale/PaymentReceiptForm";

const formTabs = [
  { id: "product", label: "Post Product", icon: Package },
  { id: "po", label: "Purchase Order", icon: FileText },
  { id: "invoice", label: "Invoice", icon: Receipt },
  { id: "quotation", label: "Quotation", icon: FileSpreadsheet },
  { id: "challan", label: "Delivery Challan", icon: Truck },
  { id: "return", label: "Return", icon: RotateCcw },
  { id: "credit-debit", label: "Credit/Debit Note", icon: CreditCard },
  { id: "transfer", label: "Stock Transfer", icon: ArrowRightLeft },
  { id: "supplier", label: "Supplier Reg.", icon: Building2 },
  { id: "customer", label: "Customer Reg.", icon: Users },
  { id: "inventory", label: "Inventory Adj.", icon: ClipboardList },
  { id: "payment", label: "Payment Receipt", icon: Banknote },
];

const Wholesale = () => {
  const [activeTab, setActiveTab] = useState("product");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Wholesale Management</h1>
          <p className="text-muted-foreground mt-2">Manage products, orders, invoices, and business operations</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-2">
              <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent">
                {formTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </CardContent>
          </Card>

          <TabsContent value="product"><WholesaleProductForm /></TabsContent>
          <TabsContent value="po"><PurchaseOrderForm /></TabsContent>
          <TabsContent value="invoice"><InvoiceForm /></TabsContent>
          <TabsContent value="quotation"><QuotationForm /></TabsContent>
          <TabsContent value="challan"><DeliveryChallanForm /></TabsContent>
          <TabsContent value="return"><ReturnForm /></TabsContent>
          <TabsContent value="credit-debit"><CreditDebitNoteForm /></TabsContent>
          <TabsContent value="transfer"><StockTransferForm /></TabsContent>
          <TabsContent value="supplier"><SupplierRegistrationForm /></TabsContent>
          <TabsContent value="customer"><CustomerRegistrationForm /></TabsContent>
          <TabsContent value="inventory"><InventoryAdjustmentForm /></TabsContent>
          <TabsContent value="payment"><PaymentReceiptForm /></TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Wholesale;
