import configService from "./config.service";

export const getContentFieldByName = (name,field)=>{
    let result = null;
    for (let index = 0 ; index < field.contentFields.length;index++)
    {

        if (field.contentFields[index].name.toLowerCase() == name.toLowerCase())
        {
            if (field.contentFields[index].dataType.toLowerCase() == 'string')
            {
                return field.contentFields[index].contentFieldValue.data;
            }
            if (field.contentFields[index].dataType.toLowerCase() == 'image')
            {
                return `${configService.APIHost}/${field.contentFields[index].contentFieldValue.image.contentUrl}`;
            }
        }
    }
    return '';
}
