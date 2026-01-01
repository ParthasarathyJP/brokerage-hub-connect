import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const IoTSensorDataForm = () => {
  const [formData, setFormData] = useState({
    sensorId: "",
    sensorType: "",
    sensorModel: "",
    farmerId: "",
    farmerName: "",
    landReference: "",
    installationDate: "",
    lastCalibrationDate: "",
    readingTimestamp: "",
    soilMoisture: "",
    soilTemperature: "",
    soilPh: "",
    soilNitrogen: "",
    soilPhosphorus: "",
    soilPotassium: "",
    airTemperature: "",
    airHumidity: "",
    waterFlowRate: "",
    waterPressure: "",
    waterTotalUsage: "",
    pumpStatus: "",
    pumpRuntime: "",
    valveStatus: "",
    batteryLevel: "",
    signalStrength: "",
    alertType: "",
    alertMessage: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("IoT Sensor Data:", formData);
    toast.success("Sensor data recorded successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">IoT Sensor Data Form</CardTitle>
        <CardDescription>
          Record and track smart irrigation sensor readings for soil moisture, water flow, and pump status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sensor Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Sensor Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sensorId">Sensor ID *</Label>
                <Input
                  id="sensorId"
                  value={formData.sensorId}
                  onChange={(e) => handleChange("sensorId", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sensorType">Sensor Type *</Label>
                <Select value={formData.sensorType} onValueChange={(value) => handleChange("sensorType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="soil_moisture">Soil Moisture Sensor</SelectItem>
                    <SelectItem value="soil_npk">Soil NPK Sensor</SelectItem>
                    <SelectItem value="weather">Weather Station</SelectItem>
                    <SelectItem value="flow_meter">Water Flow Meter</SelectItem>
                    <SelectItem value="pressure">Pressure Sensor</SelectItem>
                    <SelectItem value="pump_monitor">Pump Monitor</SelectItem>
                    <SelectItem value="valve_controller">Valve Controller</SelectItem>
                    <SelectItem value="multi">Multi-Parameter Sensor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sensorModel">Sensor Model</Label>
                <Input
                  id="sensorModel"
                  value={formData.sensorModel}
                  onChange={(e) => handleChange("sensorModel", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Farm / Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <Label htmlFor="landReference">Land Reference / Survey No.</Label>
                <Input
                  id="landReference"
                  value={formData.landReference}
                  onChange={(e) => handleChange("landReference", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Calibration Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Installation & Calibration</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="installationDate">Installation Date</Label>
                <Input
                  id="installationDate"
                  type="date"
                  value={formData.installationDate}
                  onChange={(e) => handleChange("installationDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastCalibrationDate">Last Calibration Date</Label>
                <Input
                  id="lastCalibrationDate"
                  type="date"
                  value={formData.lastCalibrationDate}
                  onChange={(e) => handleChange("lastCalibrationDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="readingTimestamp">Reading Timestamp *</Label>
                <Input
                  id="readingTimestamp"
                  type="datetime-local"
                  value={formData.readingTimestamp}
                  onChange={(e) => handleChange("readingTimestamp", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Soil Readings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Soil Readings</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="soilMoisture">Soil Moisture (%)</Label>
                <Input
                  id="soilMoisture"
                  type="number"
                  step="0.1"
                  value={formData.soilMoisture}
                  onChange={(e) => handleChange("soilMoisture", e.target.value)}
                  placeholder="0-100"
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
                  placeholder="0-14"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soilNitrogen">Nitrogen (N) mg/kg</Label>
                <Input
                  id="soilNitrogen"
                  type="number"
                  value={formData.soilNitrogen}
                  onChange={(e) => handleChange("soilNitrogen", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soilPhosphorus">Phosphorus (P) mg/kg</Label>
                <Input
                  id="soilPhosphorus"
                  type="number"
                  value={formData.soilPhosphorus}
                  onChange={(e) => handleChange("soilPhosphorus", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soilPotassium">Potassium (K) mg/kg</Label>
                <Input
                  id="soilPotassium"
                  type="number"
                  value={formData.soilPotassium}
                  onChange={(e) => handleChange("soilPotassium", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Weather Readings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Weather / Air Readings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Label htmlFor="airHumidity">Air Humidity (%)</Label>
                <Input
                  id="airHumidity"
                  type="number"
                  step="0.1"
                  value={formData.airHumidity}
                  onChange={(e) => handleChange("airHumidity", e.target.value)}
                  placeholder="0-100"
                />
              </div>
            </div>
          </div>

          {/* Water / Pump Readings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Water Flow & Pump Status</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="waterFlowRate">Water Flow Rate (L/min)</Label>
                <Input
                  id="waterFlowRate"
                  type="number"
                  step="0.1"
                  value={formData.waterFlowRate}
                  onChange={(e) => handleChange("waterFlowRate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waterPressure">Water Pressure (bar)</Label>
                <Input
                  id="waterPressure"
                  type="number"
                  step="0.1"
                  value={formData.waterPressure}
                  onChange={(e) => handleChange("waterPressure", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waterTotalUsage">Total Water Usage (L)</Label>
                <Input
                  id="waterTotalUsage"
                  type="number"
                  value={formData.waterTotalUsage}
                  onChange={(e) => handleChange("waterTotalUsage", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pumpStatus">Pump Status</Label>
                <Select value={formData.pumpStatus} onValueChange={(value) => handleChange("pumpStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="on">ON - Running</SelectItem>
                    <SelectItem value="off">OFF</SelectItem>
                    <SelectItem value="standby">Standby</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pumpRuntime">Pump Runtime (hours)</Label>
                <Input
                  id="pumpRuntime"
                  type="number"
                  step="0.1"
                  value={formData.pumpRuntime}
                  onChange={(e) => handleChange("pumpRuntime", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valveStatus">Valve Status</Label>
                <Select value={formData.valveStatus} onValueChange={(value) => handleChange("valveStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="partial">Partially Open</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Device Health */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Device Health</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="batteryLevel">Battery Level (%)</Label>
                <Input
                  id="batteryLevel"
                  type="number"
                  value={formData.batteryLevel}
                  onChange={(e) => handleChange("batteryLevel", e.target.value)}
                  placeholder="0-100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signalStrength">Signal Strength (dBm)</Label>
                <Input
                  id="signalStrength"
                  type="number"
                  value={formData.signalStrength}
                  onChange={(e) => handleChange("signalStrength", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Alerts & Notifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="alertType">Alert Type</Label>
                <Select value={formData.alertType} onValueChange={(value) => handleChange("alertType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select if alert triggered" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Alert</SelectItem>
                    <SelectItem value="low_moisture">Low Soil Moisture</SelectItem>
                    <SelectItem value="high_moisture">High Soil Moisture</SelectItem>
                    <SelectItem value="low_battery">Low Battery</SelectItem>
                    <SelectItem value="pump_failure">Pump Failure</SelectItem>
                    <SelectItem value="leak_detected">Leak Detected</SelectItem>
                    <SelectItem value="sensor_offline">Sensor Offline</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="alertMessage">Alert Message</Label>
                <Input
                  id="alertMessage"
                  value={formData.alertMessage}
                  onChange={(e) => handleChange("alertMessage", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any observations or notes..."
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Record Sensor Data</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default IoTSensorDataForm;
