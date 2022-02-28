export interface IPromisePath extends IPromiseSuccess {
	path?: string;
}

export interface IPromiseSuccess {
	success?: boolean;
	message?: string;
}
