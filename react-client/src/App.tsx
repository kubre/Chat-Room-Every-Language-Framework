import "./index.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

function App() {
    return (
        <main className="container flex justify-around items-center h-screen">
            <Card className="w-[500px] h-[600px] flex flex-col">
                <CardHeader>
                    <CardDescription>Chat Room</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto">
                    <ul>
                        <li>User: Message</li>
                    </ul>
                </CardContent>
                <CardFooter className="h-auto gap-x-2">
                    <Input className="w-full" placeholder="Type Command..." />
                    <Button className="">Submit</Button>
                </CardFooter>
            </Card>
        </main>
    );
}

export default App;
