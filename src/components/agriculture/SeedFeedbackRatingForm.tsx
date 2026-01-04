import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Star } from "lucide-react";

const SeedFeedbackRatingForm = () => {
  const [formData, setFormData] = useState({
    feedbackType: "",
    orderId: "",
    invoiceNumber: "",
    productName: "",
    supplierName: "",
    buyerName: "",
    buyerContact: "",
    overallRating: 0,
    productQualityRating: 0,
    packagingRating: 0,
    deliveryRating: 0,
    valueForMoneyRating: 0,
    germinationRate: "",
    yieldPerformance: "",
    qualityFeedback: "",
    deliveryFeedback: "",
    packagingCondition: "",
    wouldRecommend: "",
    suggestions: "",
    complaintDetails: "",
    attachmentDescription: "",
    feedbackDate: ""
  });

  const StarRating = ({ value, onChange, label }: { value: number; onChange: (val: number) => void; label: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 cursor-pointer transition-colors ${
              star <= value ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
            }`}
            onClick={() => onChange(star)}
          />
        ))}
      </div>
    </div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback & Rating:", formData);
    toast.success("Feedback submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Feedback & Rating Form</CardTitle>
        <CardDescription>
          Rate the quality of seeds/fertilizers and share your delivery experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Feedback Type & Reference */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Feedback Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="feedbackType">Feedback Type *</Label>
                <Select onValueChange={(value) => setFormData({...formData, feedbackType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product-review">Product Review</SelectItem>
                    <SelectItem value="supplier-review">Supplier Review</SelectItem>
                    <SelectItem value="delivery-feedback">Delivery Feedback</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                    <SelectItem value="suggestion">Suggestion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="orderId">Order/PO Number *</Label>
                <Input
                  id="orderId"
                  value={formData.orderId}
                  onChange={(e) => setFormData({...formData, orderId: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="feedbackDate">Feedback Date *</Label>
                <Input
                  id="feedbackDate"
                  type="date"
                  value={formData.feedbackDate}
                  onChange={(e) => setFormData({...formData, feedbackDate: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name *</Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => setFormData({...formData, productName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplierName">Supplier Name *</Label>
                <Input
                  id="supplierName"
                  value={formData.supplierName}
                  onChange={(e) => setFormData({...formData, supplierName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerName">Your Name *</Label>
                <Input
                  id="buyerName"
                  value={formData.buyerName}
                  onChange={(e) => setFormData({...formData, buyerName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerContact">Contact Number</Label>
                <Input
                  id="buyerContact"
                  value={formData.buyerContact}
                  onChange={(e) => setFormData({...formData, buyerContact: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Ratings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Ratings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StarRating
                value={formData.overallRating}
                onChange={(val) => setFormData({...formData, overallRating: val})}
                label="Overall Rating *"
              />
              <StarRating
                value={formData.productQualityRating}
                onChange={(val) => setFormData({...formData, productQualityRating: val})}
                label="Product Quality"
              />
              <StarRating
                value={formData.packagingRating}
                onChange={(val) => setFormData({...formData, packagingRating: val})}
                label="Packaging"
              />
              <StarRating
                value={formData.deliveryRating}
                onChange={(val) => setFormData({...formData, deliveryRating: val})}
                label="Delivery Experience"
              />
              <StarRating
                value={formData.valueForMoneyRating}
                onChange={(val) => setFormData({...formData, valueForMoneyRating: val})}
                label="Value for Money"
              />
            </div>
          </div>

          {/* Product Performance (for seeds) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Product Performance (for Seeds)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="germinationRate">Observed Germination Rate (%)</Label>
                <Input
                  id="germinationRate"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.germinationRate}
                  onChange={(e) => setFormData({...formData, germinationRate: e.target.value})}
                  placeholder="Actual germination percentage observed"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yieldPerformance">Yield Performance</Label>
                <Select onValueChange={(value) => setFormData({...formData, yieldPerformance: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select performance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent - Above Expected</SelectItem>
                    <SelectItem value="good">Good - As Expected</SelectItem>
                    <SelectItem value="average">Average - Below Expected</SelectItem>
                    <SelectItem value="poor">Poor - Significantly Below</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Detailed Feedback */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Detailed Feedback</h3>
            <div className="space-y-2">
              <Label htmlFor="qualityFeedback">Quality Feedback</Label>
              <Textarea
                id="qualityFeedback"
                value={formData.qualityFeedback}
                onChange={(e) => setFormData({...formData, qualityFeedback: e.target.value})}
                placeholder="Share your experience with the product quality"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="packagingCondition">Packaging Condition on Receipt</Label>
                <Select onValueChange={(value) => setFormData({...formData, packagingCondition: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="intact">Intact - Perfect Condition</SelectItem>
                    <SelectItem value="minor-damage">Minor Damage</SelectItem>
                    <SelectItem value="damaged">Damaged</SelectItem>
                    <SelectItem value="severely-damaged">Severely Damaged</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="wouldRecommend">Would you recommend?</Label>
                <Select onValueChange={(value) => setFormData({...formData, wouldRecommend: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="definitely">Definitely Yes</SelectItem>
                    <SelectItem value="probably">Probably Yes</SelectItem>
                    <SelectItem value="not-sure">Not Sure</SelectItem>
                    <SelectItem value="probably-not">Probably Not</SelectItem>
                    <SelectItem value="no">Definitely Not</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryFeedback">Delivery Experience</Label>
              <Textarea
                id="deliveryFeedback"
                value={formData.deliveryFeedback}
                onChange={(e) => setFormData({...formData, deliveryFeedback: e.target.value})}
                placeholder="Comments about delivery timing, handling, communication"
              />
            </div>
          </div>

          {/* Complaints & Suggestions */}
          {formData.feedbackType === "complaint" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Complaint Details</h3>
              <div className="space-y-2">
                <Label htmlFor="complaintDetails">Describe your complaint in detail *</Label>
                <Textarea
                  id="complaintDetails"
                  value={formData.complaintDetails}
                  onChange={(e) => setFormData({...formData, complaintDetails: e.target.value})}
                  placeholder="Please provide detailed information about your complaint"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="suggestions">Suggestions for Improvement</Label>
            <Textarea
              id="suggestions"
              value={formData.suggestions}
              onChange={(e) => setFormData({...formData, suggestions: e.target.value})}
              placeholder="Any suggestions to improve our products or services"
            />
          </div>

          <Button type="submit" className="w-full">Submit Feedback</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedFeedbackRatingForm;
