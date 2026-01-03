"use client"

import { useState } from "react"
import { Calculator, DollarSign, Ruler, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

const projectTypes = {
  deck: { name: "Custom Deck", basePrice: 35, icon: Home },
  fence: { name: "Fence Installation", basePrice: 25, icon: Home },
  pool: { name: "Swimming Pool", basePrice: 150, icon: Home },
  patio: { name: "Patio/Hardscape", basePrice: 40, icon: Home },
  kitchen: { name: "Outdoor Kitchen", basePrice: 120, icon: Home },
}

const materialOptions = {
  standard: { name: "Standard", multiplier: 1 },
  premium: { name: "Premium", multiplier: 1.4 },
  luxury: { name: "Luxury", multiplier: 1.8 },
}

export function CostEstimator() {
  const [projectType, setProjectType] = useState<keyof typeof projectTypes>("deck")
  const [squareFeet, setSquareFeet] = useState([200])
  const [material, setMaterial] = useState<keyof typeof materialOptions>("standard")

  const basePrice = projectTypes[projectType].basePrice
  const materialMultiplier = materialOptions[material].multiplier
  const estimatedCost = Math.round(basePrice * squareFeet[0] * materialMultiplier)

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border">
      <CardHeader className="bg-gradient-to-r from-primary to-primary-hover text-white rounded-t-lg p-4">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 rounded-lg p-1.5">
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <CardTitle className="text-base sm:text-lg">Project Cost Estimator</CardTitle>
            <CardDescription className="text-white/90 text-xs sm:text-sm">
              Get an instant estimate for your outdoor project
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        {/* Project Type Selection */}
        <div className="space-y-2">
          <Label htmlFor="project-type" className="text-sm font-semibold flex items-center gap-2">
            <Home className="w-3 h-3 text-primary" />
            Project Type
          </Label>
          <Select value={projectType} onValueChange={(value) => setProjectType(value as keyof typeof projectTypes)}>
            <SelectTrigger id="project-type" className="h-9 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(projectTypes).map(([key, value]) => (
                <SelectItem key={key} value={key} className="text-sm">
                  {value.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Square Footage Slider */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold flex items-center gap-2">
            <Ruler className="w-3 h-3 text-primary" />
            Project Size: <span className="text-accent">{squareFeet[0]} sq ft</span>
          </Label>
          <Slider value={squareFeet} onValueChange={setSquareFeet} min={100} max={1000} step={50} className="py-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>100 sq ft</span>
            <span>1,000 sq ft</span>
          </div>
        </div>

        {/* Material Selection */}
        <div className="space-y-2">
          <Label htmlFor="material" className="text-sm font-semibold">
            Material Quality
          </Label>
          <Select value={material} onValueChange={(value) => setMaterial(value as keyof typeof materialOptions)}>
            <SelectTrigger id="material" className="h-9 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(materialOptions).map(([key, value]) => (
                <SelectItem key={key} value={key} className="text-sm">
                  {value.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-4" />

        {/* Estimated Cost Display */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Estimated Cost</p>
              <div className="flex items-baseline gap-1">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                <span className="text-2xl sm:text-3xl font-bold text-primary">{estimatedCost.toLocaleString()}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-muted-foreground mb-1">Per sq ft</p>
              <p className="text-base sm:text-lg font-semibold text-accent">
                ${(estimatedCost / squareFeet[0]).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <Button className="w-full h-9 text-sm font-semibold bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-accent transition-all duration-300">
          Get Accurate Quote
        </Button>

        <p className="text-[10px] text-center text-muted-foreground">
          *This is an estimate. Final costs may vary based on project requirements.
        </p>
      </CardContent>
    </Card>
  )
}
