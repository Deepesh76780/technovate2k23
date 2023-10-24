"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function LandingPage() {
  return (
    <Tabs defaultValue="account" className="w-full flex flex-row">
      <TabsList className="flex flex-col w-[35%] gap-4 text-purple-300 ">
        <TabsTrigger value="pronight" className="shadow-inner font-Chakra data-[state=active]:shadow-pink-500 shadow-pink-300 tracking-widest rounded-2xl p-3 uppercase w-32 hover:scale-110 transition-all duration-300">Pronight</TabsTrigger>
        <TabsTrigger value="culture" className="shadow-inner font-Chakra shadow-pink-300 data-[state=active]:shadow-pink-500 tracking-widest rounded-2xl p-3 uppercase w-32 hover:scale-110 transition-all duration-300">culture</TabsTrigger>
        <TabsTrigger value="technical" className="shadow-inner font-Chakra shadow-pink-300 data-[state=active]:shadow-pink-500 tracking-widest rounded-2xl p-3 uppercase w-32 hover:scale-110 transition-all duration-300">Technical</TabsTrigger>
        <TabsTrigger value="informal" className="shadow-inner font-Chakra shadow-pink-300 data-[state=active]:shadow-pink-500 tracking-widest rounded-2xl p-3 uppercase w-32 hover:scale-110 transition-all duration-300">informal</TabsTrigger>
      </TabsList>
      <div className="shadow-inner shadow-black lg:h-[400px] xl:h-[500px] text-white p-5 w-full rounded-xl bg-[#bf5dbf29]">
        <TabsContent value="pronight">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="culture">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="informal">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">

            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  )
}
