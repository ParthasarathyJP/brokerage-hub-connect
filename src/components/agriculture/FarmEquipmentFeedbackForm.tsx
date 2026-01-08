import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  label: string;
}

const StarRating = ({ rating, onRatingChange, label }: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="focus:outline-none"
          >
            <Star
              className={`w-6 h-6 ${
                star <= (hoverRating || rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const FarmEquipmentFeedbackForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    feedbackType: "",
    orderNumber: "",
    equipmentType: "",
    equipmentModel: "",
    sellerDealerName: "",
    purchaseDate: "",
    buyerName: "",
    buyerPhone: "",
    buyerEmail: "",
    performanceFeedback: "",
    deliveryFeedback: "",
    valueForMoneyFeedback: "",
    improvements: "",
  });
  const [ratings, setRatings] = useState({
    overallRating: 0,
    sellerRating: 0,
    equipmentQuality: 0,
    deliveryExperience: 0,
    afterSalesService: 0,
  });
  const [wouldRecommend, setWouldRecommend] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (key: keyof typeof ratings, value: number) => {
    setRatings({ ...ratings, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Farm Equipment Feedback:", formData, ratings, { wouldRecommend });
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your valuable feedback!",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">⭐</span> Feedback & Rating Form
        </CardTitle>
        <CardDescription>
          Share your experience with farm equipment purchase and seller
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Feedback Type */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Feedback Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="feedbackType">Feedback Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, feedbackType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select feedback type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="purchase">Purchase Experience</SelectItem>
                    <SelectItem value="equipment">Equipment Performance</SelectItem>
                    <SelectItem value="service">After-Sales Service</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                    <SelectItem value="suggestion">Suggestion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="orderNumber">Order/Invoice Number</Label>
                <Input
                  id="orderNumber"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleChange}
                  placeholder="e.g., ORD-2024-001234"
                />
              </div>
            </div>
          </div>

          {/* Equipment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Equipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="equipmentType">Equipment Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, equipmentType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select equipment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tractor">Tractor</SelectItem>
                    <SelectItem value="harvester">Harvester</SelectItem>
                    <SelectItem value="cultivator">Cultivator</SelectItem>
                    <SelectItem value="plough">Plough</SelectItem>
                    <SelectItem value="seeder">Seeder/Planter</SelectItem>
                    <SelectItem value="sprayer">Sprayer</SelectItem>
                    <SelectItem value="thresher">Thresher</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentModel">Equipment Model/Brand</Label>
                <Input
                  id="equipmentModel"
                  name="equipmentModel"
                  value={formData.equipmentModel}
                  onChange={handleChange}
                  placeholder="e.g., Mahindra 575 DI"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerDealerName">Seller/Dealer Name *</Label>
                <Input
                  id="sellerDealerName"
                  name="sellerDealerName"
                  value={formData.sellerDealerName}
                  onChange={handleChange}
                  placeholder="Name of seller or dealer"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="purchaseDate">Purchase Date</Label>
                <Input
                  id="purchaseDate"
                  name="purchaseDate"
                  type="date"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Buyer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Your Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="buyerName">Your Name *</Label>
                <Input
                  id="buyerName"
                  name="buyerName"
                  value={formData.buyerName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerPhone">Phone Number</Label>
                <Input
                  id="buyerPhone"
                  name="buyerPhone"
                  value={formData.buyerPhone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyerEmail">Email</Label>
                <Input
                  id="buyerEmail"
                  name="buyerEmail"
                  type="email"
                  value={formData.buyerEmail}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          {/* Ratings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Ratings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StarRating
                rating={ratings.overallRating}
                onRatingChange={(value) => handleRatingChange("overallRating", value)}
                label="Overall Rating *"
              />
              <StarRating
                rating={ratings.sellerRating}
                onRatingChange={(value) => handleRatingChange("sellerRating", value)}
                label="Seller/Dealer Rating"
              />
              <StarRating
                rating={ratings.equipmentQuality}
                onRatingChange={(value) => handleRatingChange("equipmentQuality", value)}
                label="Equipment Quality"
              />
              <StarRating
                rating={ratings.deliveryExperience}
                onRatingChange={(value) => handleRatingChange("deliveryExperience", value)}
                label="Delivery Experience"
              />
              <StarRating
                rating={ratings.afterSalesService}
                onRatingChange={(value) => handleRatingChange("afterSalesService", value)}
                label="After-Sales Service"
              />
            </div>
          </div>

          {/* Detailed Feedback */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Detailed Feedback</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="performanceFeedback">Equipment Performance</Label>
                <Textarea
                  id="performanceFeedback"
                  name="performanceFeedback"
                  value={formData.performanceFeedback}
                  onChange={handleChange}
                  placeholder="How is the equipment performing? Any issues or highlights?"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryFeedback">Transaction Experience</Label>
                <Textarea
                  id="deliveryFeedback"
                  name="deliveryFeedback"
                  value={formData.deliveryFeedback}
                  onChange={handleChange}
                  placeholder="How was your buying and delivery experience?"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valueForMoneyFeedback">Value for Money</Label>
                <Textarea
                  id="valueForMoneyFeedback"
                  name="valueForMoneyFeedback"
                  value={formData.valueForMoneyFeedback}
                  onChange={handleChange}
                  placeholder="Do you feel you got good value for the price paid?"
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Recommendation</h3>
            <div className="space-y-2">
              <Label>Would you recommend this seller/equipment to others?</Label>
              <Select onValueChange={setWouldRecommend}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
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

          {/* Improvements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Suggestions for Improvement</h3>
            <div className="space-y-2">
              <Label htmlFor="improvements">What could be improved?</Label>
              <Textarea
                id="improvements"
                name="improvements"
                value={formData.improvements}
                onChange={handleChange}
                placeholder="Share any suggestions to improve the service or equipment..."
                rows={4}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Feedback</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FarmEquipmentFeedbackForm;
