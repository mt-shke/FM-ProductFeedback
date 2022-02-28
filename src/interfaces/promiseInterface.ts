export interface IPromisePath extends IPromise {
	path?: string;
}

export interface IPromise {
	success?: boolean;
	message?: string;
	status?: number;
}
