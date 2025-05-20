import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    const locale = (await cookies()).get('sinemodalibelen_locale')?.value || 'tr';

    return {
        locale,
        messages: JSON.parse(JSON.stringify(await import(`../messages/${locale}.json`))),
    };
});
