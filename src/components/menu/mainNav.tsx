import { getMenuData } from '@/services/menu';
import { SystemMenuType } from '@/types/systemMenuType';
import { GetServerSideProps } from 'next';
import Link from 'next/link';  // 導入 Link 組件


interface Props {
    menu: SystemMenuType[];
}

export default function MainNav({ menu }: Props) {
  return (
    <nav>
        {menu.map(item => (
            <Link
                key={item.id}
                href={item.url ?? '#'}
                style={{ marginRight: '10px' }}
            >
                {item.title}
            </Link>
        ))}
    </nav>
  );
}
export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    try {
        const menu = await getMenuData(ctx);
        return {
            props: { menu },
            // 如果需要，可以設定 Cache-Control 標頭（在 API Route 中處理較佳）
        };
    } catch (error) {
        console.error('取得選單資料失敗:', error);
        return {
            props: { menu: [] },
        };
    }
};
