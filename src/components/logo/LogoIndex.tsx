import { getWebData } from '@/services/getWebData';
import LogoClient from './LogoClient';

// 定義組件的屬性類型
interface Props {
  className?: string; // 可選的 CSS 類名
  link?: boolean;     // 是否將 logo 包裝在鏈接中
}

// LogoIndex 是一個異步組件，用於獲取和處理 logo 數據
async function LogoIndex({ className = '', link = true }: Props) {
  // 從服務器獲取網站數據
  const webData = await getWebData();

  // 解析 logo 數據
  let logoSrc = '';
  const logoData = JSON.parse(webData.system_logo);
  // 獲取 logo 的路徑，如果不存在則使用空字符串
  logoSrc = logoData[0]?.path || '';

  // 準備傳遞給 LogoClient 的數據
  const logoProps = {
    className,
    link,
    data: {
      ...webData,    // 展開所有網站數據
      logoSrc        // 添加解析後的 logo 路徑
    }
  };

  // 渲染 LogoClient 組件，並傳遞處理後的數據
  return <LogoClient {...logoProps} />;
}

export default LogoIndex;