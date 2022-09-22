export class Partner {
	Id: number;
	Guid: string;
	Active: boolean;
	TenantId: number;
	ExternalPartnerId: number;
}

export class ActivatePartnerModel{
	ClientKeyword: string;
	PartnerId: number;
}