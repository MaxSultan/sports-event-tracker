"use client"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3oj8xuGj1XH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {useState} from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Component() {
  const [wrestler1, setWrestler1] = useState("");
  const [wrestler2, setWrestler2] = useState("");

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Match Tracker</h1>
          <div className="text-sm">
            <span>New England Patriots</span> vs <span>Los Angeles Rams</span>
          </div>
          <div className="text-sm">
            <span>4th Quarter</span> | <span>2:15 remaining</span> | <span>Patriots 21 - Rams 17</span>
          </div>
        </div>
        <div>
          <Button variant="ghost" size="icon">
            <SettingsIcon className="w-6 h-6" />
          </Button>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-[300px_1fr_300px] gap-4 p-4">
      <div className="bg-background rounded-lg border p-4 overflow-auto">
          <h2 className="text-lg font-medium mb-4">Event Categories</h2>
          <div className="grid gap-2">
            <Button variant="outline" size="sm">
              <ShieldIcon className="w-4 h-4 mr-2" />
              Defense Formation
            </Button>
            <Button variant="outline" size="sm">
              <ZapIcon className="w-4 h-4 mr-2" />
              Offense Play
            </Button>
            <Button variant="outline" size="sm">
              <BoltIcon className="w-4 h-4 mr-2" />
              Special Teams
            </Button>
            <Button variant="outline" size="sm">
              <TargetIcon className="w-4 h-4 mr-2" />
              Penalties
            </Button>
            <Button variant="outline" size="sm">
              <ClipboardIcon className="w-4 h-4 mr-2" />
              Substitutions
            </Button>
            <Button variant="outline" size="sm">
              <BriefcaseIcon className="w-4 h-4 mr-2" />
              Coaching Decisions
            </Button>
          </div>
        </div>
        <div className="bg-background rounded-lg border p-4 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Event Log</h2>
            <Button variant="outline" size="sm">
              <TimerIcon className="w-4 h-4 mr-2" />
              Timeline View
            </Button>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Defense Formation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <div className="text-muted-foreground">2:15</div>
                  <div>
                    <div className="font-medium">3-4 Defense</div>
                    <div className="text-sm text-muted-foreground">
                      Rams in shotgun formation, Patriots switch to a 3-4 defense
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Offense Play</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <div className="text-muted-foreground">2:05</div>
                  <div>
                    <div className="font-medium">Rams Pass Attempt</div>
                    <div className="text-sm text-muted-foreground">
                      Rams QB Jared Goff throws an incomplete pass to WR Cooper Kupp
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Special Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <div className="text-muted-foreground">1:55</div>
                  <div>
                    <div className="font-medium">Patriots Punt</div>
                    <div className="text-sm text-muted-foreground">
                      Patriots punt the ball 45 yards, Rams take over at their own 20-yard line
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Offense Play</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <div className="text-muted-foreground">1:45</div>
                  <div>
                    <div className="font-medium">Rams Run Play</div>
                    <div className="text-sm text-muted-foreground">
                      Rams RB Todd Gurley rushes for 8 yards, 2nd down and 2 yards to go
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-background rounded-lg border p-4 overflow-auto">
          <h2 className="text-lg font-medium mb-4">Event Categories</h2>
          <div className="grid gap-2">
            <Button variant="outline" size="sm">
              <ShieldIcon className="w-4 h-4 mr-2" />
              Defense Formation
            </Button>
            <Button variant="outline" size="sm">
              <ZapIcon className="w-4 h-4 mr-2" />
              Offense Play
            </Button>
            <Button variant="outline" size="sm">
              <BoltIcon className="w-4 h-4 mr-2" />
              Special Teams
            </Button>
            <Button variant="outline" size="sm">
              <TargetIcon className="w-4 h-4 mr-2" />
              Penalties
            </Button>
            <Button variant="outline" size="sm">
              <ClipboardIcon className="w-4 h-4 mr-2" />
              Substitutions
            </Button>
            <Button variant="outline" size="sm">
              <BriefcaseIcon className="w-4 h-4 mr-2" />
              Coaching Decisions
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function TargetIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function TimerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}


function ZapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  )
}