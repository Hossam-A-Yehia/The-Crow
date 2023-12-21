import { ModeToggle } from "@/components/ModeToggle";
import TopNav from "@/components/TopNav";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="p-4 border-b-gray-100 dark:border-b-slate-800 border-[1px]">
        <TopNav />
      </div>
      <main>{children}</main>
    </>
  );
}
export default layout;
