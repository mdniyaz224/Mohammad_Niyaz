/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { BiPhoneCall, BiEnvelope } from "react-icons/bi";

export function DialogDemo(props: { open: boolean; setOpen:any; }) {
  const { open ,setOpen} = props;
  // const [open, setOpen] = useState(initialOpen);

  const handleCall = () => {
    window.location.href = "tel:+0558570571";
  };

  const handleEmail = () => {
    window.location.href = "mailto:mdniyaz1842000@gmail.com";
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center text-gray-800">Hire Me</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            You can hire me for your project, including Website, Web App, Mobile App, or Wordpress development.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-6">
          <div className="flex items-center gap-4">
            <BiPhoneCall className="text-2xl text-blue-500" />
            <div className="flex flex-col">
              <Label htmlFor="call" className="text-gray-800 font-medium">
                Call Me
              </Label>
              <button
                onClick={handleCall}
                className="text-blue-600 hover:underline focus:outline-none"
              >
                +91 9523990312
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <BiEnvelope className="text-2xl text-green-500" />
            <div className="flex flex-col">
              <Label htmlFor="email" className="text-gray-800 font-medium">
                Email Me
              </Label>
              <button
                onClick={handleEmail}
                className="text-green-600 hover:underline focus:outline-none"
              >
                mdniyaz1842000@gmail.com
              </button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleClose} className="w-full mt-4 bg-gray-800 text-white hover:bg-gray-700">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
