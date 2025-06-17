import { AccessControl } from 'accesscontrol';

const ac = new AccessControl();

// Définissez vos permissions ici
ac.grant('guest').readOwn('profile');

ac.grant('user').readOwn('profile').updateOwn('profile');

ac.grant('admin').readAny('profile').updateAny('profile').deleteAny('profile');

export { ac };
