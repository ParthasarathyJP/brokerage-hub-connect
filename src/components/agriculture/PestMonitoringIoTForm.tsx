import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const PestMonitoringIoTForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    recordId: "",
    recordDate: "",
    recordTime: "",
    farmerId: "",
    farmerName: "",
    landReference: "",
    deviceId: "",
    deviceType: "",
    deviceLocation: "",
    gpsLatitude: "",
    gpsLongitude: "",
    trapType: "",
    pestsCaptured: "",
    pestSpecies: "",
    captureCount: "",
    soilMoisture: "",
    soilTemperature: "",
    soilPh: "",
    airTemperature: "",
    airHumidity: "",
    windSpeed: "",
    rainfall: "",
    droneFlightId: "",
    droneOperator: "",
    areaSurveyed: "",
    imagesCaptured: "",
    pestHotspots: "",
    vegetationHealth: "",
    alertType: "",
    alertSeverity: "",
    alertMessage: "",
    recommendedAction: "",
    actionTaken: "",
    notes: ""
  });

  const [deviceStatus, setDeviceStatus] = useState({
    batteryOk: false,
    sensorCalibrated: false,
    dataTransmitting: false,
    maintenanceRequired: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("IoT Monitoring Data:", { ...formData, deviceStatus });
    toast({
      title: "Data Recorded",
      description: "IoT sensor data has been recorded successfully."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          IoT Monitoring Form - Pest Surveillance
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Pest traps, drone surveillance, soil sensors data recording
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Record Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Record Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="recordId">Record ID</Label>
                <Input
                  id="recordId"
                  placeholder="Auto-generated"
                  value={formData.recordId}
                  onChange={(e) => handleChange("recordId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="recordDate">Date *</Label>
                <Input
                  id="recordDate"
                  type="date"
                  value={formData.recordDate}
                  onChange={(e) => handleChange("recordDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="recordTime">Time *</Label>
                <Input
                  id="recordTime"
                  type="time"
                  value={formData.recordTime}
                  onChange={(e) => handleChange("recordTime", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Farm & Device Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Farm & Device Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farmerId">Farmer ID</Label>
                <Input
                  id="farmerId"
                  value={formData.farmerId}
                  onChange={(e) => handleChange("farmerId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farmerName">Farmer Name</Label>
                <Input
                  id="farmerName"
                  value={formData.farmerName}
                  onChange={(e) => handleChange("farmerName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="landReference">Land Reference</Label>
                <Input
                  id="landReference"
                  value={formData.landReference}
                  onChange={(e) => handleChange("landReference", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deviceId">Device ID *</Label>
                <Input
                  id="deviceId"
                  value={formData.deviceId}
                  onChange={(e) => handleChange("deviceId", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deviceType">Device Type *</Label>
                <Select onValueChange={(value) => handleChange("deviceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select device" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pest-trap">Pest Trap Sensor</SelectItem>
                    <SelectItem value="pheromone-trap">Pheromone Trap</SelectItem>
                    <SelectItem value="light-trap">Light Trap</SelectItem>
                    <SelectItem value="soil-sensor">Soil Sensor</SelectItem>
                    <SelectItem value="weather-station">Weather Station</SelectItem>
                    <SelectItem value="drone">Drone</SelectItem>
                    <SelectItem value="camera">Field Camera</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deviceLocation">Device Location</Label>
                <Input
                  id="deviceLocation"
                  placeholder="Field section/zone"
                  value={formData.deviceLocation}
                  onChange={(e) => handleChange("deviceLocation", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gpsLatitude">GPS Latitude</Label>
                <Input
                  id="gpsLatitude"
                  value={formData.gpsLatitude}
                  onChange={(e) => handleChange("gpsLatitude", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gpsLongitude">GPS Longitude</Label>
                <Input
                  id="gpsLongitude"
                  value={formData.gpsLongitude}
                  onChange={(e) => handleChange("gpsLongitude", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Pest Trap Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Pest Trap Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="trapType">Trap Type</Label>
                <Select onValueChange={(value) => handleChange("trapType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select trap type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pheromone">Pheromone Trap</SelectItem>
                    <SelectItem value="light">Light Trap</SelectItem>
                    <SelectItem value="sticky">Sticky Trap</SelectItem>
                    <SelectItem value="pitfall">Pitfall Trap</SelectItem>
                    <SelectItem value="funnel">Funnel Trap</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pestsCaptured">Pests Captured?</Label>
                <Select onValueChange={(value) => handleChange("pestsCaptured", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pestSpecies">Pest Species Identified</Label>
                <Input
                  id="pestSpecies"
                  placeholder="e.g., Bollworm, Aphids"
                  value={formData.pestSpecies}
                  onChange={(e) => handleChange("pestSpecies", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="captureCount">Capture Count</Label>
                <Input
                  id="captureCount"
                  type="number"
                  value={formData.captureCount}
                  onChange={(e) => handleChange("captureCount", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Soil Sensor Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Soil Sensor Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="soilMoisture">Soil Moisture (%)</Label>
                <Input
                  id="soilMoisture"
                  type="number"
                  step="0.1"
                  value={formData.soilMoisture}
                  onChange={(e) => handleChange("soilMoisture", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soilTemperature">Soil Temperature (°C)</Label>
                <Input
                  id="soilTemperature"
                  type="number"
                  step="0.1"
                  value={formData.soilTemperature}
                  onChange={(e) => handleChange("soilTemperature", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soilPh">Soil pH</Label>
                <Input
                  id="soilPh"
                  type="number"
                  step="0.1"
                  value={formData.soilPh}
                  onChange={(e) => handleChange("soilPh", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Weather Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Weather Station Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="airTemperature">Air Temperature (°C)</Label>
                <Input
                  id="airTemperature"
                  type="number"
                  step="0.1"
                  value={formData.airTemperature}
                  onChange={(e) => handleChange("airTemperature", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="airHumidity">Humidity (%)</Label>
                <Input
                  id="airHumidity"
                  type="number"
                  step="0.1"
                  value={formData.airHumidity}
                  onChange={(e) => handleChange("airHumidity", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="windSpeed">Wind Speed (km/h)</Label>
                <Input
                  id="windSpeed"
                  type="number"
                  step="0.1"
                  value={formData.windSpeed}
                  onChange={(e) => handleChange("windSpeed", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rainfall">Rainfall (mm)</Label>
                <Input
                  id="rainfall"
                  type="number"
                  step="0.1"
                  value={formData.rainfall}
                  onChange={(e) => handleChange("rainfall", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Drone Surveillance Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Drone Surveillance Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="droneFlightId">Flight ID</Label>
                <Input
                  id="droneFlightId"
                  value={formData.droneFlightId}
                  onChange={(e) => handleChange("droneFlightId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="droneOperator">Operator Name</Label>
                <Input
                  id="droneOperator"
                  value={formData.droneOperator}
                  onChange={(e) => handleChange("droneOperator", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="areaSurveyed">Area Surveyed (acres)</Label>
                <Input
                  id="areaSurveyed"
                  type="number"
                  step="0.01"
                  value={formData.areaSurveyed}
                  onChange={(e) => handleChange("areaSurveyed", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imagesCaptured">Images Captured</Label>
                <Input
                  id="imagesCaptured"
                  type="number"
                  value={formData.imagesCaptured}
                  onChange={(e) => handleChange("imagesCaptured", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pestHotspots">Pest Hotspots Identified</Label>
                <Input
                  id="pestHotspots"
                  placeholder="Number of hotspots"
                  value={formData.pestHotspots}
                  onChange={(e) => handleChange("pestHotspots", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vegetationHealth">Vegetation Health Index</Label>
                <Select onValueChange={(value) => handleChange("vegetationHealth", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthy">Healthy (NDVI &gt; 0.6)</SelectItem>
                    <SelectItem value="moderate">Moderate (0.3-0.6)</SelectItem>
                    <SelectItem value="stressed">Stressed (0.2-0.3)</SelectItem>
                    <SelectItem value="unhealthy">Unhealthy (&lt; 0.2)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Device Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Device Status</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="batteryOk"
                  checked={deviceStatus.batteryOk}
                  onCheckedChange={(checked) => setDeviceStatus(prev => ({ ...prev, batteryOk: !!checked }))}
                />
                <Label htmlFor="batteryOk">Battery OK</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sensorCalibrated"
                  checked={deviceStatus.sensorCalibrated}
                  onCheckedChange={(checked) => setDeviceStatus(prev => ({ ...prev, sensorCalibrated: !!checked }))}
                />
                <Label htmlFor="sensorCalibrated">Sensors Calibrated</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="dataTransmitting"
                  checked={deviceStatus.dataTransmitting}
                  onCheckedChange={(checked) => setDeviceStatus(prev => ({ ...prev, dataTransmitting: !!checked }))}
                />
                <Label htmlFor="dataTransmitting">Data Transmitting</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="maintenanceRequired"
                  checked={deviceStatus.maintenanceRequired}
                  onCheckedChange={(checked) => setDeviceStatus(prev => ({ ...prev, maintenanceRequired: !!checked }))}
                />
                <Label htmlFor="maintenanceRequired">Maintenance Required</Label>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Alerts & Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="alertType">Alert Type</Label>
                <Select onValueChange={(value) => handleChange("alertType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select alert type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Alert</SelectItem>
                    <SelectItem value="pest-threshold">Pest Threshold Exceeded</SelectItem>
                    <SelectItem value="weather-warning">Weather Warning</SelectItem>
                    <SelectItem value="soil-condition">Soil Condition Alert</SelectItem>
                    <SelectItem value="device-malfunction">Device Malfunction</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="alertSeverity">Alert Severity</Label>
                <Select onValueChange={(value) => handleChange("alertSeverity", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="alertMessage">Alert Message</Label>
              <Textarea
                id="alertMessage"
                placeholder="Auto-generated or manual alert message..."
                value={formData.alertMessage}
                onChange={(e) => handleChange("alertMessage", e.target.value)}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="recommendedAction">Recommended Action</Label>
              <Textarea
                id="recommendedAction"
                placeholder="System recommended action..."
                value={formData.recommendedAction}
                onChange={(e) => handleChange("recommendedAction", e.target.value)}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="actionTaken">Action Taken</Label>
              <Textarea
                id="actionTaken"
                placeholder="Describe action taken in response to alert..."
                value={formData.actionTaken}
                onChange={(e) => handleChange("actionTaken", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              placeholder="Any additional observations..."
              value={formData.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              rows={2}
            />
          </div>

          <Button type="submit" className="w-full">Record IoT Data</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PestMonitoringIoTForm;
