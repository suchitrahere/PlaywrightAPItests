export function jsonToFormData(json) {
    const formData = new FormData();

    function appendFormData(fd, data, parentKey) {
        if (data && typeof data === 'object' && !Array.isArray(data)) {
            // Handle nested objects
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    appendFormData(fd, data[key], parentKey ? `${parentKey}.${key}` : key);
                }
            }
        } else {
            // Handle primitives and arrays
            fd.append(parentKey, data);
        }
    }

    appendFormData(formData, json, '');
    return formData;
}
