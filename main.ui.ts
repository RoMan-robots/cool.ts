import { Button, Div } from "./core/ui";
import { fetchUser } from "./main.connector";

export const btn = new Button(".my-magic-btn");
export const div = new Div("#app-container");

export function init() {
  console.log("[UI] Ready to bind events to HTML...");

  btn.onClick(async () => {
    div.setHtml("<i>Loading...</i>");

    const user: any = await fetchUser();

    if (user) {
      div.setHtml(
        `<b>Name:</b> ${user.name} <br> <b>Email:</b> ${user.email}`,
      );
    } else {
      div.setText("Error loading!");
    }
  });
}
