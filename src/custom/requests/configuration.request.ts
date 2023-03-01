export class AddConfigurationRequest {
  name: string;
  value: string;
}

export class GetConfigurationRequest {
  name: string;
  lang: string;
  applicationId: number;
}

export class AddApplicationRequest {
  name: string;
  value: string;
  applicationId: number;
  lang: string;
}
