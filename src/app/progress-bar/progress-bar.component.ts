import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  // 1 biến đứng cùng Input thì tức là đã được export ra bên ngoài để tương tác với các component cha
  @Input() set progress(val: number) {
    this._progress = val;
  }

  get progress() {
    return this._progress;
  }

  private _progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input('progress-color') progressColor = 'tomato';
  // progress-color là 1 external

  // nếu không muốn dùng onChange thì ta có thể dùng getter và setter cho Input, validator trong hàm setter luôn
  ngOnChanges(changes: SimpleChanges): void {
    // nếu có Input truyền vào thì onChange này sẽ được chạy trước, sau đó thay đổi dữ liệu
    console.log('onChange');
  }

  constructor() {
    // các giá trị được binding từ component cha sẽ chưa được binding vào đây
    console.log('contructor');
  }

  ngOnInit(): void {
    // mà sẽ được binding vào đây trước nhé
    console.log('init');
  }
}
