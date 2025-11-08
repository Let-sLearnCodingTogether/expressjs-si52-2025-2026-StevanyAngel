import type { ReactNode } from "react";

function MyButton({
    children
} : {
    children : ReactNode
}) {
  return <button className="btn btn-primary">
    {children}
  </button>
}

export default MyButton;