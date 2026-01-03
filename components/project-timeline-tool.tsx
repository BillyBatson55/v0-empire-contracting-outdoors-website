"use client"

import { useState } from "react"
import { Clock, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const projectTimelines = {
  deck: { name: "Custom Deck", weeks: "2-4", phases: ["Design", "Permits", "Foundation", "Installation", "Finishing"] },
  fence: {
    name: "Fence Installation",
    weeks: "1-2",
    phases: ["Planning", "Layout", "Post Installation", "Panel/Board Installation"],
  },
  pool: {
    name: "Swimming Pool",
    weeks: "8-12",
    phases: ["Design", "Permits", "Excavation", "Shell", "Plumbing", "Decking", "Finishing"],
  },
  patio: {
    name: "Patio/Hardscape",
    weeks: "2-3",
    phases: ["Design", "Excavation", "Base Prep", "Installation", "Sealing"],
  },
  kitchen: {
    name: "Outdoor Kitchen",
    weeks: "3-5",
    phases: ["Design", "Foundation", "Structure", "Utilities", "Installation", "Finishing"],
  },
}

export function ProjectTimelineTool() {
  const [projectType, setProjectType] = useState<keyof typeof projectTimelines>("deck")
  const timeline = projectTimelines[projectType]

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border">
      <CardHeader className="bg-gradient-to-r from-accent to-orange-600 text-white rounded-t-lg p-4">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 rounded-lg p-1.5">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <CardTitle className="text-base sm:text-lg">Project Timeline Estimator</CardTitle>
            <CardDescription className="text-white/90 text-xs sm:text-sm">
              See how long your project typically takes
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        {/* Project Type Selection */}
        <div className="space-y-2">
          <Label htmlFor="timeline-project" className="text-sm font-semibold">
            Select Project Type
          </Label>
          <Select value={projectType} onValueChange={(value) => setProjectType(value as keyof typeof projectTimelines)}>
            <SelectTrigger id="timeline-project" className="h-9 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(projectTimelines).map(([key, value]) => (
                <SelectItem key={key} value={key} className="text-sm">
                  {value.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Timeline Display */}
        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-4 border border-accent/20">
          <div className="text-center mb-4">
            <p className="text-xs text-muted-foreground mb-1">Estimated Duration</p>
            <p className="text-2xl sm:text-3xl font-bold text-accent">{timeline.weeks} weeks</p>
          </div>

          {/* Phases */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Project Phases</p>
            <div className="space-y-2">
              {timeline.phases.map((phase, index) => (
                <div key={phase} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div className="flex-1 text-sm text-foreground">{phase}</div>
                  <CheckCircle2 className="w-4 h-4 text-primary/30" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-[10px] text-center text-muted-foreground">
          *Timelines vary based on weather, permits, and project complexity.
        </p>
      </CardContent>
    </Card>
  )
}
