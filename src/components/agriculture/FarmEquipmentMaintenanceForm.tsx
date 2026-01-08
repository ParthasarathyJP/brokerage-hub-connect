import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const FarmEquipmentMaintenanceForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    equipmentId: "",
    equipmentType: "",
    brand: "",
    model: "",
    purchaseDate: "",
    warrantyStatus: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    serviceType: "",
    issueDescription: "",
    preferredDate: "",
    preferredTimeSlot: "",
    serviceLocation: "",
    locationAddress: "",
    locationPincode: "",
    urgencyLevel: "",
    previousServiceDate: "",
    runningHours: "",
  });
  const [isUnderWarranty, setIsUnderWarranty] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Farm Equipment Maintenance:", formData, { isUnderWarranty });
    toast({
      title: "Service Request Submitted",
      description: "Your maintenance request has been logged successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🔧</span> Maintenance Request Form
        </CardTitle>
        <CardDescription>
          Request maintenance, repair, or warranty service for your farm equipment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Equipment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Equipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="equipmentId">Equipment ID / Serial Number *</Label>
                <Input
                  id="equipmentId"
                  name="equipmentId"
                  value={formData.equipmentId}
                  onChange={handleChange}
                  placeholder="e.g., TRC-2024-001234"
                  required
                />
              </div>
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
                    <SelectItem value="rotavator">Rotavator</SelectItem>
                    <SelectItem value="pump">Water Pump</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Brand *</Label>
                <Input
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="e.g., Mahindra, John Deere"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model *</Label>
                <Input
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="Model number/name"
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
              <div className="space-y-2">
                <Label htmlFor="runningHours">Running Hours / Odometer</Label>
                <Input
                  id="runningHours"
                  name="runningHours"
                  value={formData.runningHours}
                  onChange={handleChange}
                  placeholder="e.g., 1500 hours"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isUnderWarranty"
                checked={isUnderWarranty}
                onCheckedChange={(checked) => setIsUnderWarranty(checked as boolean)}
              />
              <Label htmlFor="isUnderWarranty">Equipment is under warranty</Label>
            </div>
          </div>

          {/* Owner Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Owner Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner Name *</Label>
                <Input
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="Equipment owner name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerPhone">Phone Number *</Label>
                <Input
                  id="ownerPhone"
                  name="ownerPhone"
                  value={formData.ownerPhone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerEmail">Email</Label>
                <Input
                  id="ownerEmail"
                  name="ownerEmail"
                  type="email"
                  value={formData.ownerEmail}
                  onChange={handleChange}
                  placeholder="owner@example.com"
                />
              </div>
            </div>
          </div>

          {/* Service Type */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Service Request</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="routine">Routine Maintenance</SelectItem>
                    <SelectItem value="repair">Repair</SelectItem>
                    <SelectItem value="warranty">Warranty Claim</SelectItem>
                    <SelectItem value="inspection">Inspection/Diagnosis</SelectItem>
                    <SelectItem value="overhaul">Major Overhaul</SelectItem>
                    <SelectItem value="parts">Parts Replacement</SelectItem>
                    <SelectItem value="emergency">Emergency Breakdown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="urgencyLevel">Urgency Level *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, urgencyLevel: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency (Same Day)</SelectItem>
                    <SelectItem value="urgent">Urgent (Within 2-3 Days)</SelectItem>
                    <SelectItem value="normal">Normal (Within a Week)</SelectItem>
                    <SelectItem value="scheduled">Scheduled Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="issueDescription">Issue Description *</Label>
              <Textarea
                id="issueDescription"
                name="issueDescription"
                value={formData.issueDescription}
                onChange={handleChange}
                placeholder="Describe the issue or maintenance needed in detail..."
                rows={4}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="previousServiceDate">Last Service Date</Label>
              <Input
                id="previousServiceDate"
                name="previousServiceDate"
                type="date"
                value={formData.previousServiceDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Preferred Date/Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Preferred Service Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTimeSlot">Preferred Time</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, preferredTimeSlot: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                    <SelectItem value="evening">Evening (4 PM - 6 PM)</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Service Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Service Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="serviceLocation">Service Location *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, serviceLocation: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Where should service be done?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="onsite">On-Site (My Location)</SelectItem>
                    <SelectItem value="dealer">Dealer Workshop</SelectItem>
                    <SelectItem value="service-center">Authorized Service Center</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="locationPincode">Location Pincode</Label>
                <Input
                  id="locationPincode"
                  name="locationPincode"
                  value={formData.locationPincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="locationAddress">Service Location Address</Label>
              <Textarea
                id="locationAddress"
                name="locationAddress"
                value={formData.locationAddress}
                onChange={handleChange}
                placeholder="Full address for on-site service..."
                rows={2}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Maintenance Request</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FarmEquipmentMaintenanceForm;
