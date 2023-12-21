"use client";
import { store } from "@/app/store/store";
import { Provider } from "react-redux";

export default function ProviderApp({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
