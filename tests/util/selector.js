import { By } from 'selenium-webdriver';
import inputData from '../../data/inputData.js';

const sideMenu = {
    internalActivity: By.xpath(`//span[normalize-space()='Internal Activity']`),
    resourceAlloc: By.xpath(`/html/body/div/div/div/div[1]/div/div/div[3]/ul/li[1]/a/span`),
    burgerIcon: By.xpath(`//button[contains(@class, 'Hamburger') and contains(@class, 'btn-outline-secondary')]`)
};

const loginSelectors = {
    emailInput: By.xpath("//input[@name='email']"),
    passwordInput: By.xpath("//input[@name='password']"),
    loginButton: By.xpath("//button[contains(@class,'login-btn')]")
};

const RPM_ResAlloc = {
    SUBMENU: {
        AHistory: {
            BTN: {
                PASampleSaveBTN: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div/div[2]/table/tbody/tr[1]/td[1]/span[2]`),
                IASampleSaveBTN: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[5]/div/div/div/div[2]/table/tbody/tr[1]/td[1]/span[2]`),
                PAAssign: By.xpath(`//*[@id="root"]/div/div/div[2]/div/div/div[4]/div/div/div/div[1]/button`),
                PADeleteData: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div/div[2]/table/tbody/tr[2]/td[1]/span`),
                PADeleteData2: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div/div[2]/table/tbody/tr[3]/td[1]/span`)
            },
            DRPDWN: {
                projectAssign: By.xpath('//*[@id="root"]/div/div/div[2]/div/div/div[4]/div/div/div/div[2]/div/table/tbody/tr[1]/td[9]/select'),
                PASample1: By.xpath(`//*[@id="root"]/div/div/div[2]/div/div/div[4]/div/div/div/div[2]/div/table/tbody/tr[1]/td[9]/select`), // select 0.25
                internalActivity: By.xpath(`//*[@id="root"]/div/div/div[2]/div/div/div[5]/div/div/div/div[2]/div/table/tbody/tr[1]/td[9]/select`),
                IASample1: By.xpath(`//*[@id="root"]/div/div/div[2]/div/div/div[4]/div/div/div/div[2]/div/table/tbody/tr[1]/td[9]/select`), // select 0.50
                selectRole: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div/div[2]/table/tbody/tr[2]/td[4]/select`),
                selectType: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div/div[2]/table/tbody/tr[2]/td[3]/select`),
            },
            TXTBX: {
                PAsearch: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div/div[1]/div/input`)
            },

        },
        ESettings: {
            TAB: {
                longLeave: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/ul/li[1]/button`),
                lastEmpDate: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/ul/li[2]/button`),
            },
            TAB1: {
                TXTBX: {
                    date: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/div/div[2]/div[2]/div[2]/div/div/div/div/input`),
                    remarks: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/div/div[2]/div[3]/div[2]/div/textarea[1]`),
                },
                DRPDWN: {
                    leaveType: By.xpath(`//*[@id=":r4b:"]`),
                    selectIndef: By.xpath(`//*[@id=":r4c:"]/li[2]`),
                    selectPat: By.xpath(`//*[@id=":r4c:"]/li[1]`),
                    rowCount: By.xpath(`//*[@id=":r5k:"]`),
                },
                BTN: {
                    adLeaveBTN: By.xpath(`//*[@id="react-aria9298389256-:r4a:-tabpane-longLeaves"]/div/div[3]/button`),
                    updtLeaveBTN: By.xpath(`//*[@id="react-aria9298389256-:r4a:-tabpane-longLeaves"]/div/div[3]/button[2]`),
                    pageFrw: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/div/div[4]/div/div[2]/div[2]/div/div[3]/button[1]`),
                    pageBck: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/div/div[4]/div/div[2]/div[2]/div/div[3]/button[2]`),
                    delLeave: By.xpath(`//*[@id="react-aria9298389256-:r4a:-tabpane-longLeaves"]/div/div[4]/div/div[1]/div[2]/div[2]/div/div/div[2]/div/button[2]`),
                    delLeave: By.xpath(`//*[@id="react-aria9298389256-:r4a:-tabpane-longLeaves"]/div/div[4]/div/div[1]/div[2]/div[2]/div/div/div[2]/div/button[2]`),
                    editLeave: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/div/div[4]/div/div[1]/div[2]/div[2]/div/div/div[2]/div/button[1]`),
                },
            },
            TAB2: {
                TXTBX: {
                    date: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[2]/div/div[2]/div[1]/div[2]/div/input`),
                    remarks: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/input`),
                },
                DRPDWN: {
                    rowCount: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[2]/div/div[4]/div/div[2]/div[2]/div/div[2]/div`),
                },
                BTN: {
                    addBTN: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[2]/div/div[3]/button`),
                    updtBTN: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[2]/div/div[4]/div/div[1]/div[2]/div[2]/div/div/div[2]/div/button[1]`),
                    delBTN: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[2]/div/div[4]/div/div[1]/div[2]/div[2]/div/div/div[2]/div/button[2]`),
                },
            }
        },

    },
    BTN: {
        clearFilterBtn: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/button`),
        exportBtn: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[1]/div/div/div/div/div/button`),
        BUclearFilter: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div/div/div[1]/button`),
        ATclearFilter: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[2]/div/div/div[1]/button`),
        NLclearFilter: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[3]/div/div/div[1]/button`),
        CAclearFilter: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[4]/div/div/div[1]/button`),
        CSclearFilter: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[5]/div/div/div[1]/button`),
        POSclearFilter: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[6]/div/div/div[1]/button`),
        ABclearFilter: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[7]/div/div/div[1]/button`),
        SHclearFilter: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[8]/div/div/div[1]/button`),
        actionBtn: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[1]/div[2]/div[2]/div/div[1]/div[2]/div/button`),
        ATSSProfileOpt: By.xpath(`//html/body/div[2]/div[1]/button`),
        allocationHistoryOpt: By.xpath(`//html/body/div[2]/div[2]/button`),
        employeeSettingsOpt: By.xpath(`//html/body/div[2]/div[3]/button`),
        pageFwd: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[2]/div/div[3]/button[2]`),
        pageBck: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[2]/div/div[3]/button[1]`),
        // sort: By.xpath(),

    },
    TXTBX: {
        searchBox: By.xpath("//input[@placeholder='Search all columns']"),
    },
    DRPDWN: {
        buUnitsDropDown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div/button`),
        buOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[1]/div/div/div[2]`),
        allocTypeDropDown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[2]/div/button`),
        ATOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[2]/div/div/div[2]`),
        nihongoLevelDropDown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[3]/div/button`),
        NLOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[3]/div/div/div[2]`),
        currentAssignmentDropDown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[4]/div/button`),
        CAOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[4]/div/div/div[2]`),
        coreSkillsDropDown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[5]/div/button`),
        CSOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[5]/div/div/div[2]`),
        positionDropDown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[6]/div/button`),
        POSOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[6]/div/div/div[2]`),
        actionBatchDropDown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[7]/div/button`),
        ABOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[7]/div/div/div[2]`),
        showHide: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[8]/div/button`),
        SHOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[8]/div/div/div[2]`),
        rowCount: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div[2]/div/div[2]/div`),
        rowCountOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div/div[2]/div/div/div[2]`),

    },
    TBL: {
        tableColumns: By.xpath("//div[@role='columnheader']"),
        tableName: By.xpath("./div[@aria-colindex='3']"),
    },
};

const internalActivity = {
    createBTN: By.xpath("//button[normalize-space()='Create New']"),
    searchBox: By.xpath("//input[@placeholder='Search all columns']"),
    row: By.xpath('(//div[@role="row"])[2]'),
    cell: By.xpath('.//*[@role="gridcell"]'),
    optBTN: By.xpath("//div[@role='row' and .//div[@data-field='name' and normalize-space()='" + inputData.createData.name + "']]//button[contains(@class,'action-btn')]"),
    viewBTN: By.xpath('//html/body/div[2]/button'),

    name: By.xpath("//input[@name='name']"),
    date: By.xpath("//div[contains(@class,'MuiInputBase-root')]//input[@type='text' and @value='']"),
    category: By.xpath("//div[@role='combobox' and contains(@id,'internalOperationsCategoryId')]"),
    selCategoryOpt: By.xpath(`//li[normalize-space(text())='${inputData.dropdownValue.categoryOpt}']`),
    b_unit: By.xpath("//div[@role='combobox' and contains(@id,'departmentGroupMappingId')]"),
    selB_unitOpt: By.xpath(`//li[normalize-space(text())='${inputData.dropdownValue.buOpt}']`),
    remarks: By.xpath("//textarea[@name='remarks']"),
    cancelBTN: By.xpath("//button[text()='Cancel']"),
    saveBTN: By.xpath("//button[text()='Save']"),
    upBTN: By.xpath("//button[text()='Update']"),

    up_name: By.xpath("//input[@name='name' and contains(@class,'MuiInputBase-input') and contains(@value,'" + inputData.createData.name + "')]"),
    up_date: By.xpath("//input[@type='text' and contains(@class,'MuiInputBase-input') and contains(@value,'" + inputData.createData.date + "')]"),
    selCategoryOpt2: By.xpath(`//li[normalize-space(text())='${inputData.dropdownValue.categoryOpt_up}']`),
    selB_unitOpt2: By.xpath(`//li[normalize-space(text())='${inputData.dropdownValue.buOpt_up}']`),
    up_remarks: By.xpath("//textarea[@name='remarks']"),
    up_cancelBTN: By.xpath("//button[text()='Cancel']"),
    up_saveBTN: By.xpath("//button[text()='Save']"),

    sdGrp: By.xpath("//button[.//span[text()='SD Group']]"),
    bu: By.xpath("//div[@role='combobox' and contains(@id,'departmentGroupMappingId')]"),
    category: By.xpath("//div[@role='combobox' and contains(@id,'internalOperationsCategoryId')]"),
    status: By.xpath("//button[.//span[text()='Status']]"),
};

const RPM_InterActiv = {
    BTN: {
        clearAllFilter: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[2]/div[2]/button`),
        exportBTN: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[1]/div/div/div/div/div/div[1]/button`),
        createNewBtn: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[1]/div/div/div/div/div/div[2]/button`),
        SDclearDrp: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[1]/div/div/div[1]/button`),
        BUclearDrp: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[2]/div/div/div[1]/button`),
        CATclearDrp: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[3]/div/div/div[1]/button`),
        STATclearDrp: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[4]/div/div/div[1]/button`),
        actionBtn: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/div/div[1]/div[2]/div/button`),
        selectView: By.xpath(`//html/body/div[2]/button`),
        pageFwd: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[3]/button[2]`),
        pageBck: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[3]/button[1]`),
    },
    TXTBX: {
        searchBox: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[2]/div[1]/input`),
    },
    DRPDWN: {
        SDDropdown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[1]/div/button/div`),
        SDOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[1]/div/div/div[2]`),
        BUDropdown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[2]/div/button`),
        BUOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[2]/div/div/div[2]`),
        CATDropdown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[3]/div/button/div`),
        CATOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[3]/div/div/div[2]`),
        STATDropdown: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[4]/div/button/div`),
        STATOptions: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div[4]/div/div/div[2]`),
    },
    TBL: {
        header: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/div/div`),
        tableColumns: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div[2]/div[1]`),
        tableName: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/div/div[1]/div[3]`),
        table: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div`),
    },
    Label: {
        SD: By.xpath("//span[normalize-space()='SD Group']"),
        BU: By.xpath("//span[normalize-space()='Business Unit']"),
        Category: By.xpath("//span[normalize-space()='Category']"),
        Status: By.xpath("//span[normalize-space()='Status']"),
    },
    SUBMENU: {
        NEW: {
            HLINK: {
                InternalActivity: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[1]/div/div/nav/ol/li[3]/a`),
                Rpm: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[1]/div/div/nav/ol/li[2]/a`),
                Home: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[1]/div/div/nav/ol/li[1]/a`)
            },
            Label: {
                IAName: By.xpath(`//p[contains(text(),'Internal Activity Name *')]`), //Internal Activity Name *
                Date: By.xpath(`//p[contains(text(),'Dates *')]`), //Dates *
                Category: By.xpath(`//p[contains(text(),'Category *')]`), //Category *
                BU: By.xpath(`//p[contains(text(),'Business Unit *')]`), //Business Unit *
                Remarks: By.xpath(`//p[contains(text(),'Remarks')]`), // Remarks
            },
            BTN: {
                Cancel: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/button[1]`),
                Save: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/button[2]`),
                Assign: By.xpath(`//button[normalize-space()='Assign']`),
                pageBck: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div[2]/div[2]/div/div[3]/button[1]`),
                pageFwd: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div[2]/div[2]/div/div[3]/button[2]`),
                deletebtn: By.xpath(`//div[@role='gridcell' and @data-field='actions']//i[contains(@class,'bi-trash')]`),
            },
            DRPDWN: {
                Category: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/div`),
                CATOption: By.xpath(`/html/body/div[2]/div[3]/ul`),
                BU: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div[3]/div/div/div`),
                BUOption: By.xpath(`/html/body/div[2]/div[3]/ul`),
                rowCount: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div[2]/div[2]/div/div[2]/div`),
            },
            TXTBX: {
                InternalActivity: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/input`),
                Date: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[2]/div[1]/div/div/div/div/div/input`),
                Remarks: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[2]/div[2]/div/div/textarea[1]`),
                techSearch: By.xpath(`//*[@id="root"]/div/div/div[2]/div/div/div[3]/div/div[1]/div[1]/select`),
            },
            TBL: {
                table: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[2]/div/div`),
                headerColumn: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div[1]/div[2]/div[1]/div/div`),
            },
        },
        UPDATE: {
            HLINK: {
                InternalActivity: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[1]/div/div/nav/ol/li[3]/a`),
                Rpm: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[1]/div/div/nav/ol/li[2]/a`),
                Home: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[1]/div/div/nav/ol/li[1]/a`)
            },
            Label: {
                IAName: By.xpath(`//p[contains(text(),'Internal Activity Name *')]`), //Internal Activity Name *
                Date: By.xpath(`//p[contains(text(),'Dates *')]`), //Dates *
                Category: By.xpath(`//p[contains(text(),'Category *')]`), //Category *
                BU: By.xpath(`//p[contains(text(),'Business Unit *')]`), //Business Unit *
                Remarks: By.xpath(`//p[contains(text(),'Remarks')]`), // Remarks
            },
            BTN: {
                Cancel: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/button[1]`),
                Update: By.xpath(`//button[normalize-space()='Update']`),
                Assign: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/div[2]/button`),
                techUpdBtn: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[3]/button`),
                assignRes: By.xpath(`//button[normalize-space()='Assign Resource']`),
                deletebtn: By.xpath(`//div[@role='gridcell' and @data-field='actions']`),
            },
            DRPDWN: {
                Category: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/div`),
                CATOption: By.xpath(`/html/body/div[2]/div[3]/ul`),
                BU: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div[3]/div/div/div`),
                BUOption: By.xpath(`/html/body/div[2]/div[3]/ul`),
                fiscalYear: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div[1]/div/div[2]/select`),
            },
            TXTBX: {
                InternalActivity: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/input`),
                Date: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[2]/div[1]/div/div/div/div/div/input`),
                Remarks: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[2]/div[2]/div/div/textarea[1]`),
                techSearch: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/div[1]/select`),
            },
            TBL: {
                table: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div[1]`),
                headerColumn: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[3]/div[2]/div/div[1]/div[2]/div[1]/div/div`),
                paTableHead: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div[2]/div/div/div/div[2]/table/thead/tr`),
                monthTableHead: By.xpath(`/html/body/div/div/div/div[2]/div/div/div[4]/div[2]/div/div/div/div[2]/div/table/thead`),
                assignTable: By.xpath(`//div[@role='row']//div[@role='gridcell' and @data-field='name']`),
            },
        },
    },
};

export {
    sideMenu,
    loginSelectors,
    internalActivity,
    RPM_ResAlloc,
    RPM_InterActiv,
};