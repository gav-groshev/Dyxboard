import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './TabbedBlock.css';

export interface Tab {
  id: string;
  label: string;
  icon?: IconDefinition;
  badge?: number | string;
  disabled?: boolean;
}

export interface TabbedBlockProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  children?: React.ReactNode;
}

export const TabbedBlock: React.FC<TabbedBlockProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = 'default',
  className = '',
  tabClassName = '',
  activeTabClassName = '',
  children,
}) => {
  const getTabClassNames = (tabId: string, isDisabled?: boolean) => {
    const baseClasses = `tabbed-block__tab ${tabClassName}`;
    const variantClasses = {
      default: 'tabbed-block__tab--default',
      pills: 'tabbed-block__tab--pills',
      underline: 'tabbed-block__tab--underline',
    };

    const activeClass =
      activeTab === tabId ? `tabbed-block__tab--active ${activeTabClassName}` : '';
    const disabledClass = isDisabled ? 'tabbed-block__tab--disabled' : '';

    return `${baseClasses} ${variantClasses[variant]} ${activeClass} ${disabledClass}`.trim();
  };

  return (
    <div className={`tabbed-block ${className}`}>
      <div className="tabbed-block__header">
        <ul className="tabbed-block__tabs" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.id} className="tabbed-block__tab-item" role="presentation">
              <button
                className={getTabClassNames(tab.id, tab.disabled)}
                onClick={() => !tab.disabled && onTabChange(tab.id)}
                type="button"
                role="tab"
                disabled={tab.disabled}
                aria-selected={activeTab === tab.id}
                aria-controls={`tabpanel-${tab.id}`}
              >
                {tab.icon && (
                  <FontAwesomeIcon icon={tab.icon} className={tab.label ? 'me-2' : ''} />
                )}
                {tab.label}
                {tab.badge !== undefined && (
                  <span className="tabbed-block__badge">{tab.badge}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="tabbed-block__content">{children}</div>
    </div>
  );
};
