export const validateEditableField = (fieldName, fieldValue) => {
  const validate = {
    hflaWebsiteUrl: doesLinkContainFlex(fieldValue, 'hackforla.org'),
    slackUrl: doesLinkContainFlex(fieldValue, 'slack.com'),
    googleDriveUrl: doesLinkContainFlex(fieldValue, 'drive.google.com'),
    githubUrl: doesLinkContainFlex(fieldValue, 'github.com'),
    description: typeof fieldValue === 'string' && fieldValue.length <= 250,
  }
  if (fieldName in validate){
    return validate[fieldName]
  }
  else { return true; }
};

export const generateErrorEditableField = (fieldName) => {
  const validate = {
    hflaWebsiteUrl: `Invalid field value for ${fieldName}`,
    slackUrl: `Invalid field value for ${fieldName}`,
    googleDriveUrl: `Invalid field value for ${fieldName}`,
    githubUrl: `Invalid field value for ${fieldName}`,
    description: 'Description is too long, max 250 characters allowed',
  }
  if (fieldName in validate){
    return validate[fieldName]
  }
  else { return null }
};

const doesLinkContainFlex = (link, key) => {
  if (link.startsWith(`https://${key}`)) return true;
  if (link.startsWith(`https://www.${key}`)) return true;
  if (link.startsWith(key)) return true;
  return false;
};
