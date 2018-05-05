import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'on-off-switcher',
	templateUrl: './on-off-switcher.component.html'
	//styleUrls: ['./on-off-switcher.component.scss']
})
export class OnOffSwitcherComponent implements OnInit {

	@Input() label: string;
	@Input() checked: boolean;

	@Output() switch = new EventEmitter<boolean>();

	ngOnInit() {
		console.log(this.checked);
	}

	public toggle(): void {

		console.log(this.checked);

		this.checked = !this.checked;
		this.switch.emit(this.checked);
	}
}