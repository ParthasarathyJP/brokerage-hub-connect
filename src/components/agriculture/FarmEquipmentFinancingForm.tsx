import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const FarmEquipmentFinancingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    applicantName: "",
    email: "",
    phone: "",
    aadhaarNumber: "",
    panNumber: "",
    paymentMode: "",
    loanAmount: "",
    loanTenure: "",
    bankName: "",
    branchName: "",
    accountNumber: "",
    ifscCode: "",
    financierName: "",
    financierContact: "",
    subsidyScheme: "",
    subsidyAmount: "",
    equipmentDetails: "",
    equipmentCost: "",
    downPayment: "",
  });
  const [subsidyEligible, setSubsidyEligible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }
    console.log("Farm Equipment Financing:", formData, { subsidyEligible });
    toast({
      title: "Application Submitted",
      description: "Your financing application has been submitted for review.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">💰</span> Financing & Payment Form
        </CardTitle>
        <CardDescription>
          Apply for farm equipment financing, loans, or leasing options
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Applicant Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Applicant Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="applicantName">Applicant Name *</Label>
                <Input
                  id="applicantName"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="applicant@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhaarNumber">Aadhaar Number *</Label>
                <Input
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={handleChange}
                  placeholder="12-digit Aadhaar number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="panNumber">PAN Number *</Label>
                <Input
                  id="panNumber"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                  placeholder="ABCDE1234F"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Mode */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Preferred Payment Mode</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="paymentMode">Payment Mode *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, paymentMode: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash Payment</SelectItem>
                    <SelectItem value="bank-loan">Bank Loan</SelectItem>
                    <SelectItem value="nbfc-loan">NBFC Loan</SelectItem>
                    <SelectItem value="lease">Lease</SelectItem>
                    <SelectItem value="hire-purchase">Hire Purchase</SelectItem>
                    <SelectItem value="dealer-finance">Dealer Financing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentCost">Equipment Cost (₹) *</Label>
                <Input
                  id="equipmentCost"
                  name="equipmentCost"
                  type="number"
                  value={formData.equipmentCost}
                  onChange={handleChange}
                  placeholder="Total equipment cost"
                  required
                />
              </div>
            </div>
          </div>

          {/* Loan Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Loan/Financing Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="loanAmount">Loan Amount Required (₹)</Label>
                <Input
                  id="loanAmount"
                  name="loanAmount"
                  type="number"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder="Amount needed"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="downPayment">Down Payment (₹)</Label>
                <Input
                  id="downPayment"
                  name="downPayment"
                  type="number"
                  value={formData.downPayment}
                  onChange={handleChange}
                  placeholder="Down payment amount"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="loanTenure">Preferred Tenure</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, loanTenure: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tenure" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12 Months</SelectItem>
                    <SelectItem value="24">24 Months</SelectItem>
                    <SelectItem value="36">36 Months</SelectItem>
                    <SelectItem value="48">48 Months</SelectItem>
                    <SelectItem value="60">60 Months</SelectItem>
                    <SelectItem value="84">84 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Bank/Financier Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name</Label>
                <Input
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder="e.g., State Bank of India"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="branchName">Branch Name</Label>
                <Input
                  id="branchName"
                  name="branchName"
                  value={formData.branchName}
                  onChange={handleChange}
                  placeholder="Branch name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  placeholder="Bank account number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ifscCode">IFSC Code</Label>
                <Input
                  id="ifscCode"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  placeholder="e.g., SBIN0001234"
                />
              </div>
            </div>
          </div>

          {/* Subsidy Eligibility */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Government Subsidy Eligibility</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="subsidyEligible"
                checked={subsidyEligible}
                onCheckedChange={(checked) => setSubsidyEligible(checked as boolean)}
              />
              <Label htmlFor="subsidyEligible">I am eligible for government subsidy schemes</Label>
            </div>
            {subsidyEligible && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subsidyScheme">Subsidy Scheme</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, subsidyScheme: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scheme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smam">SMAM (Sub-Mission on Agricultural Mechanization)</SelectItem>
                      <SelectItem value="pm-kusum">PM-KUSUM</SelectItem>
                      <SelectItem value="state-subsidy">State Agri Mechanization Subsidy</SelectItem>
                      <SelectItem value="nabard">NABARD Subsidy</SelectItem>
                      <SelectItem value="chc">Custom Hiring Centre (CHC) Scheme</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subsidyAmount">Expected Subsidy Amount (₹)</Label>
                  <Input
                    id="subsidyAmount"
                    name="subsidyAmount"
                    type="number"
                    value={formData.subsidyAmount}
                    onChange={handleChange}
                    placeholder="Estimated subsidy"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Equipment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Equipment Details</h3>
            <div className="space-y-2">
              <Label htmlFor="equipmentDetails">Equipment Description</Label>
              <Textarea
                id="equipmentDetails"
                name="equipmentDetails"
                value={formData.equipmentDetails}
                onChange={handleChange}
                placeholder="Describe the equipment you wish to purchase (type, model, brand, specifications)..."
                rows={4}
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="termsAccepted"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            />
            <Label htmlFor="termsAccepted">
              I agree to the terms and conditions and authorize verification of my details *
            </Label>
          </div>

          <Button type="submit" className="w-full">Submit Financing Application</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FarmEquipmentFinancingForm;
