import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropFeedbackForm = () => {
  const [formData, setFormData] = useState({
    feedbackType: "",
    orderId: "",
    transactionDate: "",
    // Respondent Details
    respondentName: "",
    respondentType: "",
    phone: "",
    email: "",
    // Ratings
    overallRating: "",
    qualityRating: "",
    deliveryRating: "",
    communicationRating: "",
    pricingRating: "",
    // Counterparty
    counterpartyName: "",
    counterpartyType: "",
    // Transaction Details
    cropType: "",
    quantity: "",
    transactionValue: "",
    // Feedback
    positiveAspects: "",
    areasForImprovement: "",
    wouldRecommend: "",
    additionalComments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Crop Feedback:", formData);
    toast.success("Feedback submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const StarRating = ({ label, field, value }: { label: string; field: string; value: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select value={value} onValueChange={(val) => handleChange(field, val)}>
        <SelectTrigger>
          <SelectValue placeholder="Select rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent (5)</SelectItem>
          <SelectItem value="4">⭐⭐⭐⭐ Very Good (4)</SelectItem>
          <SelectItem value="3">⭐⭐⭐ Good (3)</SelectItem>
          <SelectItem value="2">⭐⭐ Fair (2)</SelectItem>
          <SelectItem value="1">⭐ Poor (1)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Feedback & Rating Form</CardTitle>
        <CardDescription>
          Share your experience about the transaction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Feedback Type */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Feedback Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="feedbackType">Feedback Type *</Label>
                <Select value={formData.feedbackType} onValueChange={(value) => handleChange("feedbackType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buyer-feedback">Buyer Feedback (about Seller)</SelectItem>
                    <SelectItem value="seller-feedback">Seller Feedback (about Buyer)</SelectItem>
                    <SelectItem value="platform-feedback">Platform Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="orderId">Order / Transaction ID</Label>
                <Input
                  id="orderId"
                  value={formData.orderId}
                  onChange={(e) => handleChange("orderId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transactionDate">Transaction Date</Label>
                <Input
                  id="transactionDate"
                  type="date"
                  value={formData.transactionDate}
                  onChange={(e) => handleChange("transactionDate", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Respondent Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Your Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="respondentName">Your Name *</Label>
                <Input
                  id="respondentName"
                  value={formData.respondentName}
                  onChange={(e) => handleChange("respondentName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="respondentType">You are a *</Label>
                <Select value={formData.respondentType} onValueChange={(value) => handleChange("respondentType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer/Producer</SelectItem>
                    <SelectItem value="buyer">Buyer</SelectItem>
                    <SelectItem value="trader">Trader</SelectItem>
                    <SelectItem value="processor">Processor</SelectItem>
                    <SelectItem value="exporter">Exporter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Counterparty Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">About (Counterparty)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="counterpartyName">Counterparty Name</Label>
                <Input
                  id="counterpartyName"
                  placeholder="Name of buyer/seller you're rating"
                  value={formData.counterpartyName}
                  onChange={(e) => handleChange("counterpartyName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="counterpartyType">Counterparty Type</Label>
                <Select value={formData.counterpartyType} onValueChange={(value) => handleChange("counterpartyType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer/Producer</SelectItem>
                    <SelectItem value="buyer">Buyer</SelectItem>
                    <SelectItem value="trader">Trader</SelectItem>
                    <SelectItem value="processor">Processor</SelectItem>
                    <SelectItem value="exporter">Exporter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Transaction Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type</Label>
                <Select value={formData.cropType} onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="millets">Millets</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity (Quintals)</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transactionValue">Transaction Value (₹)</Label>
                <Input
                  id="transactionValue"
                  type="number"
                  value={formData.transactionValue}
                  onChange={(e) => handleChange("transactionValue", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Ratings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Ratings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StarRating label="Overall Rating *" field="overallRating" value={formData.overallRating} />
              <StarRating label="Quality of Goods" field="qualityRating" value={formData.qualityRating} />
              <StarRating label="Delivery / Timeliness" field="deliveryRating" value={formData.deliveryRating} />
              <StarRating label="Communication" field="communicationRating" value={formData.communicationRating} />
              <StarRating label="Pricing / Value" field="pricingRating" value={formData.pricingRating} />
              <div className="space-y-2">
                <Label htmlFor="wouldRecommend">Would you recommend?</Label>
                <Select value={formData.wouldRecommend} onValueChange={(value) => handleChange("wouldRecommend", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="definitely">Definitely Yes</SelectItem>
                    <SelectItem value="probably">Probably Yes</SelectItem>
                    <SelectItem value="neutral">Neutral</SelectItem>
                    <SelectItem value="probably-not">Probably Not</SelectItem>
                    <SelectItem value="definitely-not">Definitely Not</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Detailed Feedback */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Detailed Feedback</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="positiveAspects">What went well?</Label>
                <Textarea
                  id="positiveAspects"
                  placeholder="Highlight the positive aspects of this transaction..."
                  value={formData.positiveAspects}
                  onChange={(e) => handleChange("positiveAspects", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="areasForImprovement">Areas for Improvement</Label>
                <Textarea
                  id="areasForImprovement"
                  placeholder="What could have been better?"
                  value={formData.areasForImprovement}
                  onChange={(e) => handleChange("areasForImprovement", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="additionalComments">Additional Comments</Label>
                <Textarea
                  id="additionalComments"
                  placeholder="Any other feedback..."
                  value={formData.additionalComments}
                  onChange={(e) => handleChange("additionalComments", e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Feedback</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropFeedbackForm;
