import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const FarmEquipmentRentalForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    renterName: "",
    phone: "",
    email: "",
    aadhaarNumber: "",
    address: "",
    village: "",
    district: "",
    state: "",
    pincode: "",
    rentalType: "",
    equipmentCategory: "",
    equipmentType: "",
    preferredBrand: "",
    rentalPeriod: "",
    startDate: "",
    endDate: "",
    usageLocation: "",
    landSize: "",
    cropType: "",
    operatorRequired: "",
    fuelIncluded: "",
    deliveryMode: "",
    deliveryAddress: "",
    estimatedHours: "",
    specialRequirements: "",
  });
  
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [securityDepositAgreed, setSecurityDepositAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted || !securityDepositAgreed) {
      toast({
        title: "Agreement Required",
        description: "Please accept all terms and agreements to proceed.",
        variant: "destructive",
      });
      return;
    }
    console.log("Farm Equipment Rental:", formData);
    toast({
      title: "Rental Request Submitted",
      description: "Your equipment rental request has been submitted. We will contact you shortly.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">📋</span> Rental/Leasing Form
        </CardTitle>
        <CardDescription>
          Request short-term equipment hire or long-term leasing
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Renter Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Renter Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="renterName">Renter Name *</Label>
                <Input
                  id="renterName"
                  name="renterName"
                  value={formData.renterName}
                  onChange={handleChange}
                  placeholder="Full name"
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
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhaarNumber">Aadhaar Number *</Label>
                <Input
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={handleChange}
                  placeholder="12-digit Aadhaar"
                  required
                />
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Address Details</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="address">Full Address *</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Complete address..."
                  rows={2}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="village">Village/Town *</Label>
                <Input
                  id="village"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  placeholder="Village/Town"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District *</Label>
                <Input
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="District"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, state: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="punjab">Punjab</SelectItem>
                    <SelectItem value="haryana">Haryana</SelectItem>
                    <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                    <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                  required
                />
              </div>
            </div>
          </div>

          {/* Rental Type & Equipment */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Rental Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rentalType">Rental Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, rentalType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rental type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly Rental</SelectItem>
                    <SelectItem value="daily">Daily Rental</SelectItem>
                    <SelectItem value="weekly">Weekly Rental</SelectItem>
                    <SelectItem value="monthly">Monthly Rental</SelectItem>
                    <SelectItem value="seasonal">Seasonal Rental</SelectItem>
                    <SelectItem value="long-term">Long-Term Lease</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentCategory">Equipment Category *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, equipmentCategory: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tillage">Tillage Equipment</SelectItem>
                    <SelectItem value="planting">Planting/Seeding</SelectItem>
                    <SelectItem value="harvesting">Harvesting</SelectItem>
                    <SelectItem value="irrigation">Irrigation</SelectItem>
                    <SelectItem value="spraying">Spraying/Pest Control</SelectItem>
                    <SelectItem value="transport">Transport/Hauling</SelectItem>
                    <SelectItem value="power">Power Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentType">Equipment Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, equipmentType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select equipment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tractor">Tractor</SelectItem>
                    <SelectItem value="harvester">Harvester/Combine</SelectItem>
                    <SelectItem value="rotavator">Rotavator</SelectItem>
                    <SelectItem value="cultivator">Cultivator</SelectItem>
                    <SelectItem value="plough">Plough</SelectItem>
                    <SelectItem value="seeder">Seeder/Planter</SelectItem>
                    <SelectItem value="sprayer">Sprayer</SelectItem>
                    <SelectItem value="thresher">Thresher</SelectItem>
                    <SelectItem value="trailer">Trailer/Trolley</SelectItem>
                    <SelectItem value="pump">Water Pump</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredBrand">Preferred Brand (Optional)</Label>
                <Input
                  id="preferredBrand"
                  name="preferredBrand"
                  value={formData.preferredBrand}
                  onChange={handleChange}
                  placeholder="e.g., Mahindra, John Deere"
                />
              </div>
            </div>
          </div>

          {/* Rental Period */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Rental Period</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date *</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date *</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="estimatedHours">Estimated Usage Hours</Label>
                <Input
                  id="estimatedHours"
                  name="estimatedHours"
                  type="number"
                  value={formData.estimatedHours}
                  onChange={handleChange}
                  placeholder="Approx. hours needed"
                />
              </div>
            </div>
          </div>

          {/* Usage Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Usage Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="landSize">Land Size (Acres)</Label>
                <Input
                  id="landSize"
                  name="landSize"
                  type="number"
                  step="0.01"
                  value={formData.landSize}
                  onChange={handleChange}
                  placeholder="Total land area"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, cropType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice/Paddy</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="soybean">Soybean</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="usageLocation">Usage Location</Label>
                <Input
                  id="usageLocation"
                  name="usageLocation"
                  value={formData.usageLocation}
                  onChange={handleChange}
                  placeholder="Farm/Field location"
                />
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="operatorRequired">Operator Required?</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, operatorRequired: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, with operator</SelectItem>
                    <SelectItem value="no">No, self-operated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fuelIncluded">Fuel Arrangement</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, fuelIncluded: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="included">Fuel Included</SelectItem>
                    <SelectItem value="excluded">Fuel by Renter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryMode">Delivery Mode</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, deliveryMode: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select delivery" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="self-pickup">Self Pickup</SelectItem>
                    <SelectItem value="delivery">Delivery to Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryAddress">Delivery Address (if applicable)</Label>
              <Textarea
                id="deliveryAddress"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
                placeholder="Address for equipment delivery..."
                rows={2}
              />
            </div>
          </div>

          {/* Special Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Special Requirements</h3>
            <div className="space-y-2">
              <Label htmlFor="specialRequirements">Any Special Requirements?</Label>
              <Textarea
                id="specialRequirements"
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                placeholder="Specific attachments, features, or conditions..."
                rows={3}
              />
            </div>
          </div>

          {/* Agreements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Agreements</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="securityDepositAgreed"
                  checked={securityDepositAgreed}
                  onCheckedChange={(checked) => setSecurityDepositAgreed(checked as boolean)}
                />
                <Label htmlFor="securityDepositAgreed" className="text-sm">
                  I agree to pay the security deposit as per the rental agreement. The deposit will be refunded upon return of equipment in good condition. *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="termsAccepted"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                />
                <Label htmlFor="termsAccepted" className="text-sm">
                  I agree to the rental terms and conditions, including liability for any damage during the rental period. I will use the equipment only for agricultural purposes. *
                </Label>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Rental Request</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FarmEquipmentRentalForm;
