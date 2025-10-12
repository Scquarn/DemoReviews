import { Component, input } from "@angular/core";

@Component({
  selector: "app-flower",
  standalone: true,
  imports: [],
  templateUrl: "./flower.component.html",
  styleUrl: "./flower.component.scss",
})
export class FlowerComponent {
  showDialog = false;
  dialogFinished = false;
  protected line = 0;
  private counterTimeout: NodeJS.Timeout | undefined;
  readonly dialogLines = input<string[]>(["Hello."]);

  constructor() {
    document.addEventListener("click", (event) => {
      var flower = document.getElementById("flower");
      if (event.target !== flower) {
        this.hideDialog();
      }
    });
  }

  public getDialogLine(): string {
    return this.dialogLines()[
      Math.min(this.dialogLines().length - 1, this.line)
    ];
  }

  public triggerDialog() {
    if (this.showDialog === true || this.dialogFinished) {
      this.line++;
      this.checkIfDialogueFinished();
      return;
    }
    this.showDialog = true;
  }

  public hideDialog() {
    clearTimeout(this.counterTimeout);
    this.showDialog = false;
    this.line++;
    this.checkIfDialogueFinished();
  }

  private checkIfDialogueFinished() {
    if (this.line > this.dialogLines().length - 1) {
      this.dialogFinished = true;
    }
  }
}
