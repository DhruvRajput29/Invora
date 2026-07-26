import { Mail, Lock, Eye, CircleCheck } from "lucide-react";
import { ShieldCheck,  BriefcaseBusiness, UserRound} from "lucide-react";
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Login = () => {
  return (
    <div className="min-h-screen flex bg-[#FCFCFC]">
      <LeftSide />
      <RightSide />

    </div>
  );
};

export default Login;