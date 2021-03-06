import * as React from 'react';

import AvatarLabel from 'components/common/AvatarLabel';
import AppConfig from 'config/config';
import { logClick } from 'ducks/utilMethods';
import { TableMetadata } from 'interfaces/TableMetadata';

export interface LineageLinkProps {
  tableData: TableMetadata
}

const LineageLink: React.SFC<LineageLinkProps> = ({ tableData }) => {
  const config = AppConfig.tableLineage;
  if (!config.isEnabled) return null;

  const { database, cluster, schema, table_name } = tableData;
  const href = config.urlGenerator(database, cluster, schema, table_name);
  const label = 'Lineage';

  return (
    <a
      className="header-link"
      href={ href }
      target="_blank"
      id="explore-lineage"
      onClick={ logClick }
    >
      <AvatarLabel
        label={ label }
        src={ config.iconPath }
      />
    </a>
  );
};

export default LineageLink;
