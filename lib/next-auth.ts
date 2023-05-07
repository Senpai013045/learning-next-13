import { getServerSession as _getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getServerSession = () => _getServerSession(authOptions);