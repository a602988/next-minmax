import React from 'react';
import { Option, SystemMenuType } from '@/types/systemMenuType';
import NavItem from './NavItem';



interface Props {
    ariaLabel?: string;
    className?: string;
    classNameWp?: string;
    id?: string;
    items: Array<SystemMenuType>;
}

function Nav({
    ariaLabel = "Main Navigation",
    className = "flex",
    classNameWp = "",
    id,
    items
}: Props) {
  function parseOptions(optionsString: string): Array<Option> | undefined {
    if (!optionsString || optionsString === '[]') return undefined;

    try {
      const parsed = JSON.parse(optionsString);
      if (Array.isArray(parsed) && parsed.every(opt => typeof opt === 'object' && 'key' in opt && 'value' in opt)) {
        return parsed;
      }
    } catch (error) {
      console.error(`Error parsing options:`, error, 'Options string:', optionsString);
    }

    return undefined;
  }

  function renderMenuItem(item: SystemMenuType, depth: number) {
    const { children, code, options, target, title, url } = item;

    const parsedOptions = typeof options === 'string' ? parseOptions(options) : options;

    return (
      <React.Fragment key={code}>
        <NavItem
          item={{
            title,
            url: url || '',
            options: parsedOptions,
            target,
          }}
        />
        {children && children.length > 0 && (
          <ul className={`sub-${depth + 1}`}>
            {children.map((child) => renderMenuItem(child, depth + 1))}
          </ul>
        )}
      </React.Fragment>
    );
  }

  return (
    <nav aria-label={ariaLabel} className={classNameWp}>
      <ul className={className} id={id}>
        {items.map((item) => renderMenuItem(item, 0))}
      </ul>
    </nav>
  );
}

export default Nav;
