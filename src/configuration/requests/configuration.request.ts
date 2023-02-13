export class AddConfigurationRequest {
  name: string;
  value: string;
}

export class GetConfigurationRequest {
  name: string;
  lang: string;
  applicationId: number;
}
