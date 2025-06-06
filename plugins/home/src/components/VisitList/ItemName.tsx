/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Visit } from '../../api/VisitsApi';
import { Link } from '@backstage/core-components';
import { EntityRefLink } from '@backstage/plugin-catalog-react';

const useStyles = makeStyles(theme => ({
  name: {
    marginLeft: '0.8rem',
    marginRight: '0.8rem',
    fontSize: theme.typography.body1.fontSize,
  },
}));
export const ItemName = ({ visit }: { visit: Visit }) => {
  const classes = useStyles();

  if (visit.entityRef)
    return (
      <EntityRefLink
        entityRef={visit.entityRef}
        className={classes.name}
        hideIcon
        disableTooltip
      />
    );

  return (
    <Typography
      component={Link}
      to={visit.pathname}
      noWrap
      className={classes.name}
    >
      {visit.name}
    </Typography>
  );
};
