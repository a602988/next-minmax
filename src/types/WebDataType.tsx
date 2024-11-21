export interface WebDataType {
  id: string;
  site_title: string;
  system_language: string;
  system_email: string;
  system_mobile: string | null;
  system_url: string;
  system_logo: string;
  company_name: string;
  company_nickname: string;
  company_vat: string;
  contact_phone: string;
  contact_fax: string;
  contact_email: string;
  contact_address: string;
  contact_map: string;
  social_facebook: string | null;
  social_instagram: string | null;
  social_youtube: string | null;
  social_line: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  custom_head: string | null;
  custom_body: string | null;
  custom_foot: string | null;
  cookie_consent: string | null;
  offline_text: string | null;
  [key: string]: string | null; // 添加索引簽名
}
