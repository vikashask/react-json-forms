export default {
    schema: {
        type: 'object',
        properties: {
            Category: {
                type: 'object',
                title: 'Category',
                properties: {
                    id: {
                        type: 'integer',
                        title: 'Category',
                        required: ['id'],
                        meta: {
                            name: 'Category',
                            options: [
                                {
                                    label: 'Try Recipe',
                                    value: '42'
                                },
                                {
                                    label: 'Read Article',
                                    value: '43'
                                },
                                {
                                    label: 'Watch Video',
                                    value: '44'
                                },
                                {
                                    label: 'Follow on Social',
                                    value: '45'
                                },
                                {
                                    label: 'Take A Survey',
                                    value: '46'
                                }
                            ]
                        }
                    }
                }
            },
            SurveyLink: {
                type: 'string',
                label: 'survey-link',
                title: 'survey-link'
            },
            Survey: {
                type: 'string',
                label: 'create-survey',
                title: 'create-survey',
                link: 'https://pep.qualtrics.com',
                style: { background: '#1E90FF', color: 'white' }
            },
            CardHeaderText: {
                type: 'string',
                label: 'rewards-heading-text',
                title: 'rewards-heading-text',
                meta: { grid: { item: true, md: 12 } }
            },
            CardSubtext: {
                type: 'string',
                label: 'explaining-the-reward',
                title: 'explaining-the-reward',
                meta: { grid: { item: true, md: 12 } }
            },
            Tags: {
                type: 'array',
                label: 'Add Tags',
                title: 'Add Tags',
                items: { type: 'string' }
            },
            ActiveStartDate: {
                type: 'string',
                label: 'start-date',
                title: 'start-date',
                meta: { minDate: '2018-01-01T00:00', ref: 'ActiveEndDate' }
            },
            ActiveEndDate: {
                type: 'string',
                label: 'end-date',
                title: 'end-date',
                meta: { minDate: '#/properties/ActiveStartDate' }
            },
            Points: {
                type: 'string',
                label: 'no-of-points-to-redeem',
                title: 'no-of-points-to-redeem',
                meta: { grid: { item: true, md: 12 } }
            },
            CardButtonText: { type: 'string', label: 'button-text', title: 'button-text', meta: { grid: { item: true, md: 12 } } },
            CardButtonUrl: { type: 'string', label: 'type-text-here', title: 'type-text-here', meta: { grid: { item: true, md: 12 } } },
            CardImage: {
                type: 'string',
                label: 'Guidelines for upload the card image',
                meta: {
                    subTitle: 'Better view of Image follow dimension 347 pixels by 347 pixels and File format should be in .jpg/.png.',
                    requiredAspectRatio: 347 / 347,
                    requiredHeight: 347,
                    requiredWidth: 347,
                    previewImageHeight: 347,
                    previewImageWidth: 347
                }
            }
        },
        required: ['CardHeaderText', 'ActiveStartDate', 'ActiveEndDate', 'Points', 'MaxPerUser', 'CardButtonText', 'CardButtonUrl']
    },
    uiSchema: {
        type: 'Group',
        elements: [
            {
                type: 'HorizontalLayout',
                elements: [
                    {
                        type: 'VerticalLayout',
                        elements: [
                            {
                                type: 'Control',
                                scope: '#/properties/Category/properties/id'
                            },
                            {
                                type: 'Control',
                                scope: '#/properties/Survey',
                                rule: {
                                    effect: 'SHOW',
                                    condition: {
                                        scope: '#/properties/Category/properties/id',
                                        schema: {
                                            const: '46'
                                        }
                                    }
                                }
                            },
                            {
                                type: 'Control',
                                scope: '#/properties/SurveyLink',
                                rule: {
                                    effect: 'SHOW',
                                    condition: {
                                        scope: '#/properties/Category/properties/id',
                                        schema: {
                                            const: '46'
                                        }
                                    }
                                }
                            },

                            {
                                type: 'Control',
                                scope: '#/properties/CardHeaderText'
                            },
                            {
                                type: 'Control',
                                scope: '#/properties/CardSubtext'
                            },
                            {
                                type: 'Control',
                                scope: '#/properties/Tags'
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/ActiveStartDate'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/ActiveEndDate'
                                    }
                                ]
                            },
                            {
                                type: 'Control',
                                scope: '#/properties/Points'
                            }
                        ]
                    },
                    {
                        type: 'VerticalLayout',
                        elements: [
                            {
                                type: 'Control',
                                scope: '#/properties/CardImage'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'Group',
                label: 'CTA/Buttons to claim rewards',
                elements: [
                    {
                        type: 'HorizontalLayout',
                        elements: [
                            {
                                type: 'Control',
                                scope: '#/properties/CardButtonText'
                            },
                            {
                                type: 'Control',
                                scope: '#/properties/CardButtonUrl',
                                rule: {
                                    effect: 'HIDE',
                                    condition: {
                                        scope: '#/properties/Category/properties/id',
                                        schema: {
                                            const: '46'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    query: '',
    mutation: ''
};
