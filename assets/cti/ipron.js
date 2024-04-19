(function (module) {
  function GetBrowser() {
    var script;
    var browser = navigator.userAgent.toLowerCase();
    if (-1 != browser.indexOf('chrome')) {
      return 'chrome';
    } else if (-1 != browser.indexOf('msie')) {
      return 'msie';
    } else {
      return 'unknown';
    }
  }

  function ImportJQuery(browser) {
    if (browser == 'msie') {
      script = "<script src = './scripts/jquery-1.11.2.min.js'></script>";
      script += "<script src = './scripts/jquery.xdomainrequest.min.js'></script>";
    } else {
      script = "<script src = './scripts/jquery-2.1.3.min.js'></script>";
    }
    document.write(script);
  }

  // ImportCrossOrigin();
  // ImportJQuery(GetBrowser());

  var ipron = module;

  // Variable
  //var Version = '5.2.0.5.0';
  var Version = '4.1.0.16.4';
  var baseURL = '/ic/';
  var arrAjax = new Array();
  var protocol = 'https';
  var ErrCnt = 0;
  ipron.SessionKey = '';
  ipron.Handle = -1;

  // Connect State
  ServerConnectState = {
    Null: 0,
    Trying_1st: 1,
    Trying_2nd: 2,
    Connected: 3,
    Disconnected: 4,
    Error: 5,
  };
  var ConnectedState = ServerConnectState.Null;

  // Message Type
  ipron.MsgType = {
    Null: 0,
    AjaxResponse: 1,
    ICResponse: 2,
    ICEvent: 3,
    Heartbeat: 4,
  };

  // Request
  ipron.Request = {
    Heartbeat: 'heartbeat',
    OpenServer: 'openserver',
    CloseServer: 'closeserver',
    Register: 'register',
    Unregister: 'unregister',
    GroupRegister: 'groupregister',
    GroupUnregister: 'groupunregister',
    AnswerCall: 'answercall',
    ClearCall: 'clearcall',
    MakeCall: 'makecall',
    GroupPickup: 'grouppickup',
    HoldCall: 'holdcall',
    HoldCallEx: 'holdcallex',
    RetrieveCall: 'retrievecall',
    SinglestepTransfer: 'singlesteptransfer',
    MuteTransfer: 'mutetransfer',
    SinglestepConference: 'singlestepconference',
    JoinCall: 'joincall',
    Conference: 'conference',
    DeflectCall: 'deflectcall',
    GetConnection: 'getconnection',
    GetConnectionEx: 'getconnectionex',
    GetCallInfo: 'getcallinfo',
    GetConnState: 'getconnstate',
    GetStateSubcode: 'getstatesubcode',
    AgentLogin: 'agentlogin',
    AgentLogout: 'agentlogout',
    GetGroupList: 'getgrouplist',
    GetQueueList: 'getqueuelist',
    GetAgentSkillList: 'getagentskilllist',
    GetAgentQueueList: 'getagentqueuelist',
    GetAgentList: 'getagentlist',
    GetAgentInfo: 'getagentinfo',
    GetRouteable: 'getrouteable',
    SetAFTCallState: 'setaftcallstate',
    SetAFTCallStateEx: 'setaftcallstateex',
    SetAgentState: 'setagentstate',
    ForceSetAgentState: 'forcesetagentstate',
    GetAgentState: 'getagentstate',
    GetUserdata: 'getuserdata',
    UpdateUserdata: 'updateuserdata',
    DeleteKeyUserdata: 'deletekeyuserdata',
    DeleteAllUserdata: 'deletealluserdata',
    SendUserEvent: 'senduserevent',
    SetANIUserdata: 'setaniuserdata',
    SetUCIDUserdata: 'setuciduserdata',
    GetQueueTraffic: 'getqueuetraffic',
    GetQueueOrder: 'getqueueorder',
    GetQueueOrderEx: 'getqueueorderex',
    Banishment: 'banishment',
    SetSkillEnable: 'setskillenable',
    AgentReport: 'agentreport',
    GroupReport: 'groupreport',
    QueueReport: 'queuereport',
    TenantReport: 'tenantreport',
    DNISReport: 'dnisreport',
    QueuePickup: 'queuepickup',
    MediaAttach: 'mediaattach',
    MediaDeattach: 'mediadeattach',
    MediaPlay: 'mediaplay',
    MediaCollect: 'mediacollect',
    MCSConsultCall: 'mcsconsultcall',
    MCSReconnectCall: 'mcsreconnectcall',
    MCSTransferCall: 'mcstransfercall',
    MCSOnestepTransferCall: 'mcsonesteptransfercall',
    MCSReroute: 'mcsreroute',
    BSR: 'bsr',
    EASGetAuthKey: 'easgetauthkey',
    EASSetAuthKey: 'eassetauthkey',
    EASRegister: 'easregister',
    EASUnregister: 'easunregister',
    EASGroupRegister: 'easgroupregister',
    EASGroupUnregister: 'easgroupunregister',
    EASAgentLogin: 'easagentlogin',
    GetAgentSkillListEx: 'getagentskilllistex',
    GetAgentQueueListEx: 'getagentqueuelistex',
    GetAgentListEx: 'getagentlistex',
    GetGroupListEx: 'getgrouplistex',
    GetQueueListEx: 'getqueuelistex',
    AgentRptSubscribe: 'agentrptsubscribe',
    GroupRptSubscribe: 'grouprptsubscribe',
    QueueRptSubscribe: 'queuerptsubscribe',
    TenantRptSubscribe: 'tenantrptsubscribe',
    DnisRptSubscribe: 'dnisrptsubscribe',
    CloseSubscribe: 'closesubscribe',
    GetAgentInfoEx: 'getagentinfoex',
    DtmfPlay: 'dtmfplay',
    VirtualQueueRouting: 'virtualqueuerouting',
    SetCallback: 'setcallback',
    MediaDnd: 'mediadnd',
    ReservedAgentState: 'reservedagentstate',
    SendGlobalEvent: 'sendglobalevent',
    AgentCall: 'agentcall',
    QueueReportEx: 'queuereportex',
    GetMediaActivate: 'getmediaactivate',
    GetRoutePolicy: 'getroutepolicy',
    SetMediaReadyState: 'setmediareadystate',
    GetMediaReadyState: 'getmediareadystate',
    GetUserCdr: 'getusercdr',
    SetUserCdr: 'setusercdr',
    SetDeviceMuteEnable: 'setdevicemuteenable',
    ReserveIrAttr: 'reserveirattr',
    FindWaitIr: 'findwaitir',
    GetUserCdrEx: 'getusercdrex',
    SetUserCdrEx: 'setusercdrex',
    AgentAdnLogin: 'agentadnlogin',
    SetAgentStateData: 'setagentstatedata',
    GetCategoryList: 'getcategorylist',
    GetCategoryInfo: 'getcategoryinfo',
    GetAgentMasterQueueInfo: 'getagentmasterqueueinfo',
    GetDeviceActivate: 'getdeviceactivate',
    SetUserCdrV5: 'setusercdrv5',
    MuteTransferEx: 'mutetransferex',
    GetMediaOption: 'getmediaoption',
    SetMediaOption: 'setmediaoption',
    GetGroupSkillList: 'getgroupskilllist',
    GetDeviceList: 'getdevicelist',
    GetCallInfoEx: 'getcallinfoex',
  };

  // Request Parameter
  ipron.Parameter = {
    Key: 'key',
    Handle: 'handle',
    ExtensionLen: 'extensionlen',
    ExtensionData: 'extensiondata',
    MessageType: 'messagetype',
    Method: 'method',
    Result: 'result',
    Appid: 'appid',
    MonitorId: 'monitorid',
    AppName: 'appname',
    AppPassword: 'apppassword',
    StartDn: 'startdn',
    EndDn: 'enddn',
    TenantName: 'tenantname',
    ThisDn: 'thisdn',
    DestDn: 'destdn',
    ObCallingDn: 'obcallingdn',
    ConnectionId: 'connectionid',
    SkillLevel: 'skilllevel',
    Priority: 'priority',
    RelationAgentDn: 'relationagentdn',
    RelationAgentId: 'relationagentid',
    RelationMethod: 'relationmethod',
    RelationTimeout: 'relationtimeout',
    RouteMethod: 'routemethod',
    RouteSkillId: 'routeskillid',
    RouteGroupId: 'routegroupid',
    PartyType: 'partytype',
    ConnectionCnt: 'connectioncnt',
    ConnectionId1: 'connectionid1',
    ConnectionId2: 'connectionid2',
    ConnectionState: 'connectionstate',
    AgentDn: 'agentdn',
    AgentId: 'agentid',
    AgentPassword: 'agentpassword',
    AgentState: 'agentstate',
    AgentStateSub: 'agentstatesub',
    SubcodeCount: 'subcodecount',
    ReasonCode: 'reasoncode',
    GroupCount: 'groupcount',
    QueueCount: 'queuecount',
    DestAgentId: 'destagentid',
    SkillCount: 'skillcount',
    GroupId: 'groupid',
    GroupIdSet: 'groupidset',
    QueueDn: 'queuedn',
    QueueDnSet: 'queuednset',
    AgentCount: 'agentcount',
    AgentName: 'agentname',
    AgentPosition: 'agentposition',
    AgentLevel: 'agentlevel',
    AniNumber: 'aninumber',
    Dnis: 'dnis',
    SkillId: 'skillid',
    SkillEnable: 'skillenable',
    SvcLvlTime: 'svclvltime',
    SvcLevel: 'svclevel',
    WaitCount: 'waitcount',
    AllAgentCount: 'allagentcount',
    LoginAgentCount: 'loginagentcount',
    ReadyAgentCount: 'readyagentcount',
    InbusyAgentCount: 'inbusyagentcount',
    IbIntBusyAgt: 'ibintbusyagt',
    IbExtBusyAgt: 'ibextbusyagt',
    OutbusyAgentCount: 'outbusyagentcount',
    ObIntBusyAgt: 'obintbusyagt',
    ObExtBusyAgt: 'obextbusyagt',
    AftworkAgentCount: 'aftworkagentcount',
    NotreadyAgentCount: 'notreadyagentcount',
    RingingCount: 'ringingcount',
    DaialingCount: 'daialingcount',
    InboundTotal: 'inboundtotal',
    AcceptTotal: 'accepttotal',
    SvcAcceptTotal: 'svcaccepttotal',
    AbandonTotal: 'abandontotal',
    SvcAbandonTotal: 'svcabandontotal',
    RejectTotal: 'rejecttotal',
    NonSvcTotal: 'nonsvctotal',
    TransBackup: 'transbackup',
    AcceptRatio: 'acceptratio',
    AcceptTalktimeSum: 'accepttalktimesum',
    AnswerCountAvr: 'answercountavr',
    TalktimeCountAvr: 'talktimecountavr',
    WaitTime: 'waittime',
    MaxWaitTime: 'maxwaittime',
    MinWaitTime: 'minwaittime',
    WaitTimeAvr: 'waittimeavr',
    WaitTimeSum: 'waittimesum',
    PriorityBound: 'prioritybound',
    DateTime: 'datetime',
    OtherLoginIpaddr: 'otherloginipaddr',
    DistributeWaitCount: 'distributewaitcount',
    SocketId: 'socketid',
    MediaOption: 'mediaoption',
    Hastate: 'hastate',
    CallId: 'callid',
    MediaId: 'mediaid',
    Duration: 'duration',
    TermDigits: 'termdigits',
    MinDigits: 'mindigits',
    MaxDigits: 'maxdigits',
    InTotal: 'intotal',
    InSuccess: 'insuccess',
    InIntTot: 'ininttot',
    InIntSuc: 'inintsuc',
    InExtTot: 'inexttot',
    InExtSuc: 'inextsuc',
    InConSuc: 'inconsuc',
    InTalkTime: 'intalktime',
    InIntTalkTime: 'ininttalktime',
    InExtTalkTime: 'inexttalktime',
    OutTotal: 'outtotal',
    OutSuccess: 'outsuccess',
    OutIntTot: 'outinttot',
    OutIntSuc: 'outintsuc',
    OutExtTot: 'outexttot',
    OutExtSuc: 'outextsuc',
    OutConSuc: 'outconsuc',
    OutTalkTime: 'outtalktime',
    TransferCalls: 'transfercalls',
    RingingTime: 'ringingtime',
    DialingTime: 'dialingtime',
    ReadyTime: 'readytime',
    NotreadyTime: 'notreadytime',
    AcwTime: 'acwtime',
    LoginTime: 'logintime',
    LogoutTime: 'logouttime',
    AnsWaitAvr: 'answaitavr',
    IvrTotal: 'ivrtotal',
    IvrAbandon: 'ivrabandon',
    IvrDodTrns: 'ivrdodtrns',
    IvrIcqTrns: 'ivricqtrns',
    IcqAccept: 'icqaccept',
    IcqSvclvlAccept: 'icqsvclvlaccept',
    IcqAbandon: 'icqabandon',
    CiqSvclvlAbandon: 'ciqsvclvlabandon',
    IcqReject: 'icqreject',
    IcqAcceptRatio: 'icqacceptratio',
    Ucid: 'ucid',
    PrivateData: 'privatedata',
    MediaType: 'mediatype',
    Option: 'option',
    Timeout: 'timeout',
    AutoDelete: 'autodelete',
    Distribute: 'distribute',
    VirtualMediaId: 'virtualmediaid',
    Gdn: 'gdn',
    Hatimeout: 'hatimeout',
    NodeId: 'nodeid',
    BsrValue: 'bsrvalue',
    BsrPrefix: 'bsrprefix',
    AuthKey: 'authkey',
    EnAuthKey: 'enauthkey',
    MonitorId: 'monitorid',
    CallId: 'callid',
    CallState: 'callstate',
    CallType: 'calltype',
    CallCharacteristic: 'callcharacteristic',
    ConnectionId: 'connectionid',
    PrevconnId: 'prevconnid',
    Ani: 'ani',
    DnisSet: 'dnisset',
    OtherDn: 'otherdn',
    OtherQueue: 'otherqueue',
    ThisDn: 'thisdn',
    ThisQueue: 'thisqueue',
    ThirdpartyDn: 'thirdpartydn',
    LastDn: 'lastdn',
    ServerName: 'servername',
    DateTime: 'datetime',
    UpdateDn: 'updatedn',
    UpdateUserId: 'updateuserid',
    SenderDn: 'senderdn',
    SenderUserId: 'senderuserid',
    EventDn: 'eventdn',
    AgentId: 'agentid',
    AgentDn: 'agentdn',
    AgentState: 'agentstate',
    AgentStateSub: 'agentstatesub',
    ReasonCode: 'reasoncode',
    ErrorCode: 'errorcode',
    ErrorMessage: 'errormessage',
    AddrType: 'addrtype',
    RegMode: 'regmode',
    TenantName: 'tenantname',
    Ucid: 'ucid',
    Hop: 'hop',
    Digits: 'digits',
    PasswdType: 'passwdtype',
    SubscribeType: 'subscribetype',
    SubscribeId: 'subscribeid',
    PbxLoginDn: 'pbxlogindn',
    PauseDuration: 'pauseduration',
    PlayDigit: 'playdigit',
    MediaSet: 'mediaset',
    ChatWeight: 'chatweight',
    ChatMax: 'chatmax',
    ChatAcwtime: 'chatacwtime',
    ChatActivate: 'chatactivate',
    VvoiceWeight: 'vvoiceweight',
    VvoiceMax: 'vvoicemax',
    VvoiceAcwtime: 'vvoiceacwtime',
    VvoiceActivate: 'vvoiceactivate',
    VchatWeight: 'vchatweight',
    VchatMax: 'vchatmax',
    VchatAcwtime: 'vchatacwtime',
    VchatActivate: 'vchatactivate',
    EmailWeight: 'emailweight',
    EmailMax: 'emailmax',
    EmailAcwtime: 'emailacwtime',
    EmailActivate: 'emailactivate',
    FaxWeight: 'faxweight',
    FaxMax: 'faxmax',
    FaxAcwtime: 'faxacwtime',
    FaxActivate: 'faxactivate',
    VoipWeight: 'voipweight',
    VoipMax: 'voipmax',
    VoipAcwtime: 'voipacwtime',
    VoipActivate: 'voipactivate',
    MvoipWeight: 'mvoipweight',
    MvoipMax: 'mvoipmax',
    MvoipAcwtime: 'mvoipacwtime',
    MvoipActivate: 'mvoipactivate',
    WebWeight: 'webweight',
    WebMax: 'webmax',
    WebAcwtime: 'webacwtime',
    WebActivate: 'webactivate',
    Enable: 'enable',
    Url: 'url',
    SrcMediaType: 'srcmediatype',
    DestMediaType: 'destmediatype',
    DestInfo1: 'destinfo1',
    DestInfo2: 'destinfo2',
    DestInfo3: 'destinfo3',
    UsePrevAgent: 'useprevagent',
    UseDesignatedAgent: 'usedesignatedagent',
    SrcNodeId: 'srcnodeid',
    MediaReady: 'mediaready',
    UserCdr: 'usercdr',
    UserCdrIndex: 'usercdrindex',
    CustomData1: 'customdata1',
    CustomData2: 'customdata2',
    CustomData3: 'customdata3',
    CategoryId: 'categoryid',
    QueueId: 'queueid',
    QueueName: 'queuename',
    SkillName: 'skillname',
    InboundAgentState: 'inboundagentstate',
    InboundAgentStateSub: 'inboundagentstatesub',
    OutboundAgentState: 'outboundagentstate',
    OutboundAgentStateSub: 'outboundagentstatesub',
    UserCdrType: 'usercdrtype',
    ActiveConnID: 'activeconnid',
    HeldConnID: 'heldconnid',
    AgtMediaWeight: 'agtmediaweight',
    AgtMediaMax: 'agtmediamax',
    DeviceType: 'devicetype',
  };

  // ICAPI Method
  ipron.APIMethod = {
    OPENSERVER: 1000,
    OPENSERVER_RES: 1001,
    CLOSESERVER: 1002,
    CLOSESERVER_RES: 1003,
    REGIADDR: 1004,
    REGIADDR_RES: 1005,
    UNREGIADDR: 1006,
    UNREGIADDR_RES: 1007,
    ANSWERCALL: 1008,
    ANSWERCALL_RES: 1009,
    CLEARCALL: 1010,
    CLEARCALL_RES: 1011,
    MAKECALL: 1012,
    MAKECALL_RES: 1013,
    HOLDCALL: 1014,
    HOLDCALL_RES: 1015,
    RETRIEVECALL: 1016,
    RETRIEVECALL_RES: 1017,
    SINGLESTEP_TRANSFER: 1018,
    SINGLESTEP_TRANSFER_RES: 1019,
    MUTE_TRANSFER: 1020,
    MUTE_TRANSFER_RES: 1021,
    SINGLESTEP_CONFERENCE: 1022,
    SINGLESTEP_CONFERENCE_RES: 1023,
    CONFERENCE: 1024,
    CONFERENCE_RES: 1025,
    AGENTLOGIN: 1030,
    AGENTLOGIN_RES: 1031,
    AGENTLOGOUT: 1032,
    AGENTLOGOUT_RES: 1033,
    SETAGENTSTATE: 1034,
    SETAGENTSTATE_RES: 1035,
    GETAGENTSTATE: 1036,
    GETAGENTSTATE_RES: 1037,
    HEARTBEAT: 1038,
    HEARTBEAT_RES: 1039,
    GETSTATE_SUBCODE: 1040,
    GETSTATE_SUBCODE_RES: 1041,
    GETAGENTLIST: 1042,
    GETAGENTLIST_RES: 1043,
    GETAGENTINFO: 1044,
    GETAGENTINFO_RES: 1045,
    GETROUTEABLE: 1046,
    GETROUTEABLE_RES: 1047,
    SETAFTCALLSTATE: 1048,
    SETAFTCALLSTATE_RES: 1049,
    GETQUEUETRAFFIC: 1050,
    GETQUEUETRAFFIC_RES: 1051,
    ITMSG_SENDMSG: 1052,
    ITMSG_SENDMSG_RES: 1053,
    ITMSG_ARRIVED: 1054,
    ITMSG_ARRIVED_RES: 1055,
    GETGROUPLIST: 1056,
    GETGROUPLIST_RES: 1057,
    GETQUEUELIST: 1058,
    GETQUEUELIST_RES: 1059,
    GROUP_REGIADDR: 1061,
    GROUP_REGIADDR_RES: 1062,
    GROUP_UNREGIADDR: 1063,
    GROUP_UNREGIADDR_RES: 1064,
    UPDATE_USERDATA: 1065,
    UPDATE_USERDATA_RES: 1066,
    DELETE_KEY_USERDATA: 1067,
    DELETE_KEY_USERDATA_RES: 1068,
    DELETE_ALL_USERDATA: 1069,
    DELETE_ALL_USERDATA_RES: 1070,
    SEND_USEREVENT: 1071,
    SEND_USEREVENT_RES: 1072,
    GRPICKUP: 1073,
    GRPICKUP_RES: 1074,
    AGENT_REPORT: 1077,
    AGENT_REPORT_RES: 1078,
    JOINCALL: 1079,
    JOINCALL_RES: 1080,
    TENANT_REPORT: 1081,
    TENANT_REPORT_RES: 1082,
    DEFLECTCALL: 1083,
    DEFLECTCALL_RES: 1084,
    SETSKILL_ENABLE: 1085,
    SETSKILL_ENABLE_RES: 1086,
    GETAGENT_SKILLLIST: 1087,
    GETAGENT_SKILLLIST_RES: 1088,
    GETCONNECTION: 1089,
    GETCONNECTION_RES: 1090,
    GET_USERDATA: 1091,
    GET_USERDATA_RES: 1092,
    GETCONNSTATE: 1093,
    GETCONNSTATE_RES: 1094,
    FORCE_SETAGTSTATE: 1095,
    FORCE_SETAGTSTATE_RES: 1096,
    GROUP_REPORT: 1099,
    GROUP_REPORT_RES: 1100,
    GETAGENT_QUEUELIST: 1101,
    GETAGENT_QUEUELIST_RES: 1102,
    GETQUEUEORDER: 1103,
    GETQUEUEORDER_RES: 1104,
    GETQUEUEORDER_EX: 1105,
    GETQUEUEORDER_EX_RES: 1106,
    SET_ANI_USERDATA: 1111,
    SET_ANI_USERDATA_RES: 1112,
    QUEUE_REPORT: 1117,
    QUEUE_REPORT_RES: 1118,
    DNIS_REPORT: 1119,
    DNIS_REPORT_RES: 1120,
    SEND_SOCKETID: 1139,
    QUEUE_PICKUP: 1140,
    QUEUE_PICKUP_RES: 1141,
    MEDIA_ATTACH: 1142,
    MEDIA_ATTACH_RES: 1143,
    MEDIA_DEATTACH: 1144,
    MEDIA_DEATTACH_RES: 1145,
    MEDIA_PLAY: 1146,
    MEDIA_PLAY_RES: 1147,
    MEDIA_COLLECT: 1148,
    MEDIA_COLLECT_RES: 1149,
    SET_UCID_USERDATA: 1150,
    SET_UCID_USERDATA_RES: 1151,
    MCS_CONSULTCALL: 1156,
    MCS_CONSULTCALL_RES: 1157,
    MCS_RECONNECTCALL: 1158,
    MCS_RECONNECTCALL_RES: 1159,
    MCS_TRANSFERCALL: 1160,
    MCS_TRANSFERCALL_RES: 1161,
    MCS_ONESTEP_TRANSFERCALL: 1162,
    MCS_ONESTEP_TRANSFERCALL_RES: 1163,
    MCS_REROUTE: 1164,
    MCS_REROUTE_RES: 1165,
    GETAGENTINFO_EX: 1166,
    GETAGENTINFO_EX_RES: 1167,
    BSR: 1170,
    BSR_RES: 1171,
    EAS_GETAUTHKEY: 1180,
    EAS_GETAUTHKEY_RES: 1181,
    EAS_SETAUTHKEY: 1182,
    EAS_SETAUTHKEY_RES: 1183,
    EAS_REGIADDR: 1184,
    EAS_REGIADDR_RES: 1185,
    EAS_UNREGIADDR: 1186,
    EAS_UNREGIADDR_RES: 1187,
    EAS_GROUP_REGIADDR: 1188,
    EAS_GROUP_REGIADDR_RES: 1189,
    EAS_GROUP_UNREGIADDR: 1190,
    EAS_GROUP_UNREGIADDR_RES: 1191,
    EAS_AGETN_LOGIN: 1192,
    EAS_AGENT_LOGIN_RES: 1193,
    AGENTCALL: 1194,
    AGENTCALL_RES: 1195,
    DTMF_PLAY: 1196,
    DTMF_PLAY_RES: 1197,

    GETAGENTLIST_EX: 1200,
    GETAGENTLIST_EX_RES: 1201,
    GETGROUPLIST_EX: 1202,
    GETGROUPLIST_EX_RES: 1203,
    GETQUEUELIST_EX: 1204,
    GETQUEUELIST_EX_RES: 1205,
    GETAGENT_SKILLLIST_EX: 1206,
    GETAGENT_SKILLLIST_EX_RES: 1207,
    GETAGENT_QUEUELIST_EX: 1208,
    GETAGENT_QUEUELIST_EX_RES: 1209,

    AGENT_SUBSCRIBE: 1220,
    AGENT_SUBSCRIBE_RES: 1221,
    GROUP_SUBSCRIBE: 1222,
    GROUP_SUBSCRIBE_RES: 1223,
    QUEUE_SUBSCRIBE: 1224,
    QUEUE_SUBSCRIBE_RES: 1225,
    TENANT_SUBSCRIBE: 1226,
    TENANT_SUBSCRIBE_RES: 1227,
    DNIS_SUBSCRIBE: 1228,
    DNIS_SUBSCRIBE_RES: 1229,
    CLOSE_SUBSCRIBE: 1230,
    CLOSE_SUBSCRIBE_RES: 1231,

    VIRTUAL_QUEUE: 1300,
    VIRTUAL_QUEUE_RES: 1301,
    SET_CALLBACK: 1302,
    SET_CALLBACK_RES: 1303,
    MEDIA_DND: 1304,
    MEDIA_DND_RES: 1305,
    RESERVED_AGENT_STATE: 1306,
    RESERVED_AGENT_STATE_RES: 1307,
    SEND_GLOBAL_EVENT: 1308,
    SEND_GLOBAL_EVENT_RES: 1309,
    GET_MEDIA_ACTIVATE: 1310,
    GET_MEDIA_ACTIVATE_RES: 1311,
    GETROUTEPOLICY: 1312,
    GETROUTEPOLICY_RES: 1313,
    SET_MEDIAREADY_STATE: 1314,
    SET_MEDIAREADY_STATE_RES: 1315,
    GET_MEDIAREADY_STATE: 1316,
    GET_MEDIAREADY_STATE_RES: 1317,
    GET_USER_CDR: 1318,
    GET_USER_CDR_RES: 1319,
    SET_USER_CDR: 1320,
    SET_USER_CDR_RES: 1321,
    SET_MUTE_ENABLE: 1322,
    SET_MUTE_ENABLE_RES: 1323,
    GETCATEGORY_LIST: 1324,
    GETCATEGORY_LIST_RES: 1325,
    GETCATEGORY_INFO: 1326,
    GETCATEGORY_INFO_RES: 1327,
    RESERVE_IR_ATTR: 1328,
    RESERVE_IR_ATTR_RES: 1329,
    FIND_WAIT_IR: 1330,
    FIND_WAIT_IR_RES: 1331,
    GETCONNECTION: 1332,
    GETCONNECTION_EX_RES: 1333,
    GETCALL_INFO: 1334,
    GETCALL_INFO_RES: 1335,
    GET_USER_CDR_EX: 1336,
    GET_USER_CDR_EX_RES: 1337,
    SET_USER_CDR_EX: 1338,
    SET_USER_CDR_EX_RES: 1339,
    ADNLOGIN: 1340,
    ADNLOGIN_RES: 1341,
    SETAGENTSTATE_DATA: 1342,
    SETAGENTSTATE_DATA_RES: 1343,
    HOLDCALL_EX: 1344,
    HOLDCALL_EX_RES: 1345,
    GETAGENT_MASTERQUEUEINFO: 1346,
    GETAGENT_MASTERQUEUEINFO_RES: 1347,
    SETAFTCALLSTATE_EX: 1348,
    SETAFTCALLSTATE_EX_RES: 1349,
    OPENSERVER_MOBILE: 1350,
    OPENSERVER_MOBILE_RES: 1351,
    GET_DEVICE_ACTIVATE: 1352,
    GET_DEVICE_ACTIVATE_RES: 1353,
    SET_USER_CDR_V5: 1354,
    SET_USER_CDR_V5_RES: 1355,
    GET_MEDIA_OPTION: 1356,
    GET_MEDIA_OPTION_RES: 1357,
    SET_MEDIA_OPTION: 1358,
    SET_MEDIA_OPTION_RES: 1359,
    MUTE_TRANSFER_EX: 1360,
    MUTE_TRANSFER_EX_RES: 1361,
    GET_GROUPSKILL_LIST: 1362,
    GET_GROUPSKILL_LIST_RES: 1363,
    GET_DEVICE_LIST: 1364,
    GET_DEVICE_LIST_RES: 1365,
    GET_CALLINFO_EX: 1366,
    GET_CALLINFO_EX_RES: 1367,
  };

  // ICAPI Event
  ipron.APIEvent = {
    RINGING: 2000,
    ESTABLISHED: 2001,
    RELEASED: 2002,
    DIALING: 2003,
    ABANDONED: 2004,
    DESTBUSY: 2005,
    HELD: 2006,
    RETRIEVED: 2007,
    PARTYADDED: 2008,
    PARTYCHANGED: 2009,
    PARTYDELETED: 2010,
    QUEUED: 2011,
    DIVERTED: 2012,
    ACDAGENT_LOGGEDON: 2013,
    ACDAGENT_LOGGEDOFF: 2014,
    ACDAGENT_NOTREADY: 2015,
    ACDAGENT_READY: 2016,
    ACDAGENT_WORKAFTCALL: 2017,
    AGENTLOGIN: 2018,
    AGENTLOGOUT: 2019,
    AGENTREADY: 2020,
    AGENTNOTREADY: 2021,
    AGENTACW: 2022,
    LINKCONNECTED: 2023,
    LINKDISCONNECTED: 2024,
    CTIDISCONNECTED: 2025,
    REGISTERED: 2026,
    UNREGISTERED: 2027,
    UPDATE_USERDATA: 2028,
    USEREVENT: 2029,
    INITIATED: 2030,
    AGENTINREADY: 2031,
    AGENTOUTREADY: 2032,
    MEDIAPLAY: 2033,
    MEDIACOLLECT: 2034,
    BANISHMENT: 2035,
    ACDAGENT_BUSY: 2036,
    FAILED: 2037,
    MCS_CONSULTED: 2041,
    MCS_RECONNECTED: 2042,
    MCS_TRANSFERRED: 2043,
    MCS_ONESTEP_TRANSFERRED: 2044,
    MCS_REROUTE: 2045,
    EAS_REGISTERED: 2051,
    EAS_UNREGISTERED: 2052,
    MEDIA_ENABLED: 2053,
    MEDIA_READY: 2054,
    DEVICE_DND: 2060,
    DEVICE_OUT_OF_SERVICE: 2061,
    DEVICE_BACK_IN_SERVICE: 2062,
    AGENTBUSY: 2063,
    VIRTUAL_MEDIA_CREATE: 3000,
    VIRTUAL_MEDIA_DISTRIBUTE: 3001,
    VIRTUAL_MEDIA_DELETE: 3002,
    HASTATE_CHANGED: 3003,
    AGENT_SSCRIBE_PUSH: 3004,
    GROUP_SSCRIBE_PUSH: 3005,
    QUEUE_SSCRIBE_PUSH: 3006,
    TENANT_SSCRIBE_PUSH: 3007,
    DNIS_SSCRIBE_PUSH: 3008,
    NEW_NOTICE: 3009,
    CALLBACK_DISTRIBUTE: 3010,

    ACTIVE_TIMEOUT: 3100,
    OPENSRVSUCCESS: 3101,
    GLOBAL_EVENT: 3102,
    NODE_OUT_SERVICE: 3103,
    NODE_IN_SERVICE: 3104,
    NODE_DR_STATE: 3105,
  };

  // Event
  ipron.WebEvent = {
    ERR_OPENSERVER: 5000,
    ERR_HEARTBEAT: 5001,
    ERR_DISCONNECT: 5002,
  };

  // Advance List Option Values
  ipron.ListOption = {
    ID: 0,
    DN: 1,
    LOGIN_ID: 2,
    NAME: 3,
    STATE: 4,
    STATE_SUB: 5,
    STATE_KEEP_TIME: 6,
    IN_OUT: 7,
    SKILL_LEVEL: 8,
    SKILL_ID: 9,
    SKILL_ENABLE: 10,
  };

  // Subscribe Type Values
  ipron.SubscribeType = {
    PERIODIC: 0,
    SENSITIVE: 1,
  };

  // JSON Key
  ipron.JSONKey = {
    Method: 'method',
    Result: 'result',
    key: 'key',
  };

  // JSON Value
  ipron.JSONValue = {
    True: 'true',
    False: 'false',
  };

  // AppName
  ipron.app_name = '';

  // Heartbeat Info
  ipron.hbPeriod = 10; // sec
  ipron.hbErrCnt = 18;

  // Server 01 Info
  ipron.ip1 = '';
  ipron.port1 = '';

  // Server 02 Info
  ipron.ip2 = '';
  ipron.port2 = '';

  // Connected ServerInfo
  ipron.ConnectedServerIndex = -1;

  // Set Protocol
  ipron.SetProtocol = function (prt) {
    if (prt == 'http') {
      protocol = 'http';
    } else {
      protocol = 'https';
    }
  };

  // Get WebAPI Version
  ipron.GetWebAPIVersion = function () {
    return Version;
  };

  // Set Heartbeat Info
  ipron.SetHeartbeatInfo = function (period, errCnt) {
    ipron.hbPeriod = period;
    ipron.hbErrCnt = errCnt;
  };

  // Set Server Info
  ipron.SetServerInfo = function (ip1, port1, ip2, port2) {
    ipron.ip1 = ip1;
    ipron.port1 = port1;
    ipron.ip2 = ip2;
    ipron.port2 = port2;
  };

  // Heartbeat
  ipron.Heartbeat = function () {
    ipron.SendData(baseURL + ipron.Request.Heartbeat + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey, 'GET');
  };

  // OpenServer
  ipron.OpenServer = function (name, cb_evt, cb_res) {
    if (ConnectedState != ServerConnectState.Connected && ConnectedState != ServerConnectState.Trying_1st) {
      if (ConnectedState != ServerConnectState.Trying_2nd) {
        ConnectedState = ServerConnectState.Trying_1st;
      }
      ipron.app_name = name;

      if (ipron.ConnectedServerIndex < 0) {
        var now = new Date();
        if (now.getMilliseconds() % 2 == 0) {
          ipron.ConnectedServerIndex = 2;
        } else {
          ipron.ConnectedServerIndex = 1;
        }
      }

      ipron.cb_evt = cb_evt;
      ipron.cb_res = cb_res;
      var data = baseURL + ipron.Request.OpenServer + '?' + ipron.Parameter.AppName + '=' + name;
      ipron.SendData(encodeURI(data));
    }
  };

  // CloseServer
  ipron.CloseServer = function () {
    if (ipron.IsConnected()) {
      var data = baseURL + ipron.Request.CloseServer + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle;
      ipron.SendData(encodeURI(data));

      ipron.SessionKey = '';
      ConnectedState = ServerConnectState.Disconnected;
    }
  };

  // Register
  ipron.Register = function (dn, tenant) {
    if (ipron.IsConnected()) {
      var data =
        baseURL +
        ipron.Request.Register +
        '?' +
        ipron.Parameter.Key +
        '=' +
        ipron.SessionKey +
        '&' +
        ipron.Parameter.Handle +
        '=' +
        ipron.Handle +
        '&' +
        ipron.Parameter.ThisDn +
        '=' +
        dn +
        '&' +
        ipron.Parameter.TenantName +
        '=' +
        tenant;
      ipron.SendData(encodeURI(data));
    }
  };

  // Unregister
  ipron.Unregister = function (dn, tenant) {
    if (ipron.IsConnected()) {
      var data =
        baseURL +
        ipron.Request.Unregister +
        '?' +
        ipron.Parameter.Key +
        '=' +
        ipron.SessionKey +
        '&' +
        ipron.Parameter.Handle +
        '=' +
        ipron.Handle +
        '&' +
        ipron.Parameter.ThisDn +
        '=' +
        dn +
        '&' +
        ipron.Parameter.TenantName +
        '=' +
        tenant;
      ipron.SendData(encodeURI(data));
    }
  };

  // Group Register
  ipron.GroupRegister = function (startDn, endDn, tenant) {
    if (ipron.IsConnected()) {
      var data =
        baseURL +
        ipron.Request.GroupRegister +
        '?' +
        ipron.Parameter.Key +
        '=' +
        ipron.SessionKey +
        '&' +
        ipron.Parameter.Handle +
        '=' +
        ipron.Handle +
        '&' +
        ipron.Parameter.StartDn +
        '=' +
        startDn +
        '&' +
        ipron.Parameter.EndDn +
        '=' +
        endDn +
        '&' +
        ipron.Parameter.TenantName +
        '=' +
        tenant;
      ipron.SendData(encodeURI(data));
    }
  };

  // Group Unregister
  ipron.GroupUnregister = function (startDn, endDn, tenant) {
    if (ipron.IsConnected()) {
      var data =
        baseURL +
        ipron.Request.GroupUnregister +
        '?' +
        ipron.Parameter.Key +
        '=' +
        ipron.SessionKey +
        '&' +
        ipron.Parameter.Handle +
        '=' +
        ipron.Handle +
        '&' +
        ipron.Parameter.StartDn +
        '=' +
        startDn +
        '&' +
        ipron.Parameter.EndDn +
        '=' +
        endDn +
        '&' +
        ipron.Parameter.TenantName +
        '=' +
        tenant;
      ipron.SendData(encodeURI(data));
    }
  };

  ipron.AnswerCall = function (dn, connectionId, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + dn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.AnswerCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.ClearCall = function (dn, connectionId, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + dn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.ClearCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MakeCall = function (
    thisDn,
    destDn,
    obCallingDn,
    skillLevel,
    priority,
    relationAgentDn,
    relationAgentId,
    relationMethod,
    routeMethod,
    routeSkillId,
    routeGroupId,
    Ucid,
    extension,
    mediaType,
    usePrevAgent,
    useDesignatedAgent,
    relationTimeout,
    hop,
  ) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ObCallingDn + '=' + obCallingDn + '&';
      data += ipron.Parameter.SkillLevel + '=' + skillLevel + '&';
      data += ipron.Parameter.Priority + '=' + priority + '&';
      data += ipron.Parameter.RelationAgentDn + '=' + relationAgentDn + '&';
      data += ipron.Parameter.RelationAgentId + '=' + relationAgentId + '&';
      data += ipron.Parameter.RelationMethod + '=' + relationMethod + '&';
      data += ipron.Parameter.RouteMethod + '=' + routeMethod + '&';
      data += ipron.Parameter.RouteSkillId + '=' + routeSkillId + '&';
      data += ipron.Parameter.RouteGroupId + '=' + routeGroupId + '&';
      data += ipron.Parameter.Ucid + '=' + Ucid + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.UsePrevAgent + '=' + usePrevAgent + '&';
      data += ipron.Parameter.UseDesignatedAgent + '=' + useDesignatedAgent + '&';
      data += ipron.Parameter.RelationTimeout + '=' + relationTimeout + '&';
      data += ipron.Parameter.Hop + '=' + hop;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.MakeCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.HoldCall = function (dn, connectionId, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + dn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.HoldCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.HoldCallEx = function (dn, connectionId, extension, mediaType, mediaOption) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + dn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.MediaOption + '=' + mediaOption;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.HoldCallEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.RetrieveCall = function (dn, connectionId, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + dn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.RetrieveCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GroupPickup = function (dn, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + dn + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.GroupPickup + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.QueuePickup = function (dn, callId, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + dn + '&';
      data += ipron.Parameter.CallId + '=' + callId;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.QueuePickup + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.JoinCall = function (thisDn, destDn, partyType, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.PartyType + '=' + partyType + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.JoinCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SinglestepTransfer = function (
    thisDn,
    connectionId,
    destDn,
    obCallingDn,
    skillLevel,
    priority,
    relationAgentDn,
    relationAgentId,
    relationMethod,
    routeMethod,
    routeSkillId,
    routeGroupId,
    extension,
    mediaType,
    usePrevAgent,
    useDesignatedAgent,
    relationTimeout,
  ) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ObCallingDn + '=' + obCallingDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.SkillLevel + '=' + skillLevel + '&';
      data += ipron.Parameter.Priority + '=' + priority + '&';
      data += ipron.Parameter.RelationAgentDn + '=' + relationAgentDn + '&';
      data += ipron.Parameter.RelationAgentId + '=' + relationAgentId + '&';
      data += ipron.Parameter.RelationMethod + '=' + relationMethod + '&';
      data += ipron.Parameter.RouteMethod + '=' + routeMethod + '&';
      data += ipron.Parameter.RouteSkillId + '=' + routeSkillId + '&';
      data += ipron.Parameter.RouteGroupId + '=' + routeGroupId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.UsePrevAgent + '=' + usePrevAgent + '&';
      data += ipron.Parameter.UseDesignatedAgent + '=' + useDesignatedAgent + '&';
      data += ipron.Parameter.RelationTimeout + '=' + relationTimeout;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.SinglestepTransfer + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MuteTransfer = function (thisDn, connectionId, destDn, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.MuteTransfer + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SinglestepConference = function (thisDn, connectionId, destDn, obCallingDn, partyType, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ObCallingDn + '=' + obCallingDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.PartyType + '=' + partyType + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.SinglestepConference + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.Conference = function (thisDn, connectionId, destDn, obCallingDn, partyType, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ObCallingDn + '=' + obCallingDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.PartyType + '=' + partyType + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.Conference + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.DeflectCall = function (
    thisDn,
    connectionId,
    destDn,
    obCallingDn,
    skillLevel,
    priority,
    relationAgentDn,
    relationAgentId,
    relationMethod,
    routeMethod,
    routeSkillId,
    routeGroupId,
    mediaOption,
    extension,
    mediaType,
    usePrevAgent,
    useDesignatedAgent,
    relationTimeout,
  ) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ObCallingDn + '=' + obCallingDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.SkillLevel + '=' + skillLevel + '&';
      data += ipron.Parameter.Priority + '=' + priority + '&';
      data += ipron.Parameter.RelationAgentDn + '=' + relationAgentDn + '&';
      data += ipron.Parameter.RelationAgentId + '=' + relationAgentId + '&';
      data += ipron.Parameter.RelationMethod + '=' + relationMethod + '&';
      data += ipron.Parameter.RouteMethod + '=' + routeMethod + '&';
      data += ipron.Parameter.RouteSkillId + '=' + routeSkillId + '&';
      data += ipron.Parameter.RouteGroupId + '=' + routeGroupId + '&';
      data += ipron.Parameter.MediaOption + '=' + mediaOption + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.UsePrevAgent + '=' + usePrevAgent + '&';
      data += ipron.Parameter.UseDesignatedAgent + '=' + useDesignatedAgent + '&';
      data += ipron.Parameter.RelationTimeout + '=' + relationTimeout;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.DeflectCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AgentLogin = function (agentDn, agentId, agentPassword, tenantName, agentState, agentStateSub, extension, passwdType, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentDn + '=' + agentDn + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.AgentPassword + '=' + agentPassword + '&';
      data += ipron.Parameter.AgentState + '=' + agentState + '&';
      data += ipron.Parameter.AgentStateSub + '=' + agentStateSub + '&';
      data += ipron.Parameter.PasswdType + '=' + passwdType + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.AgentLogin + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AgentLogout = function (agentDn, agentId, tenantName, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentDn + '=' + agentDn + '&';
      data += ipron.Parameter.AgentId + '=' + agentId;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.AgentLogout + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetAFTCallState = function (agentId, tenantName, agentState, agentStateSub, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.AgentState + '=' + agentState + '&';
      data += ipron.Parameter.AgentStateSub + '=' + agentStateSub + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetAFTCallState + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetAFTCallStateEx = function (agentId, tenantName, inboundAgentState, inboundAgentStateSub, outboundAgentState, outboundAgentStateSub, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.InboundAgentState + '=' + inboundAgentState + '&';
      data += ipron.Parameter.InboundAgentStateSub + '=' + inboundAgentStateSub + '&';
      data += ipron.Parameter.OutboundAgentState + '=' + outboundAgentState + '&';
      data += ipron.Parameter.OutboundAgentStateSub + '=' + outboundAgentStateSub + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetAFTCallStateEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetAgentState = function (agentId, tenantName, agentState, agentStateSub, extension, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.AgentState + '=' + agentState + '&';
      data += ipron.Parameter.AgentStateSub + '=' + agentStateSub + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.SetAgentState + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.ForceSetAgentState = function (agentId, tenantName, agentState, agentStateSub, extension, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.AgentState + '=' + agentState + '&';
      data += ipron.Parameter.AgentStateSub + '=' + agentStateSub + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.ForceSetAgentState + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AgentReport = function (agentId, tenantName, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.AgentReport + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GroupReport = function (tenantName, groupIdSet, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.GroupIdSet + '=' + groupIdSet + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GroupReport + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.QueueReport = function (tenantName, queueDnSet, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.QueueDnSet + '=' + queueDnSet + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.QueueReport + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.TenantReport = function (tenantName, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.TenantReport + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.DNISReport = function (dnisSet, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.DnisSet + '=' + dnisSet + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.DNISReport + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetSkillEnable = function (agentId, skillId, skillEnable) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.SkillId + '=' + skillId + '&';
      data += ipron.Parameter.SkillEnable + '=' + skillEnable;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetSkillEnable + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetGroupList = function (tenantName, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetGroupList + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetQueueList = function (tenantName, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetQueueList + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetAgentList = function (tenantName, groupIdSet, queueDnSet, privateData, agentState, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentState + '=' + agentState + '&';
      data += ipron.Parameter.GroupIdSet + '=' + groupIdSet + '&';
      data += ipron.Parameter.QueueDnSet + '=' + queueDnSet + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetAgentList + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetAgentInfo = function (tenantName, destAgentId, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestAgentId + '=' + destAgentId + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetAgentInfo + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetRouteable = function (tenantName, destAgentId, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestAgentId + '=' + destAgentId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.GetRouteable + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetAgentState = function (tenantName, destAgentId, privateData, extension, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestAgentId + '=' + destAgentId + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.GetAgentState + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetQueueTraffic = function (tenantName, queueDn, skillId, privateData, extension, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.QueueDn + '=' + queueDn + '&';
      data += ipron.Parameter.SkillId + '=' + skillId + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;

      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.GetQueueTraffic + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetStateSubcode = function (tenantName, agentState) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentState + '=' + agentState;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetStateSubcode + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetAgentSkillList = function (tenantName, destAgentId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestAgentId + '=' + destAgentId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetAgentSkillList + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetConnection = function (destDn, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.DestDn + '=' + destDn;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.GetConnection + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetAgentQueueList = function (tenantName, destAgentId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestAgentId + '=' + destAgentId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetAgentQueueList + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetQueueOrder = function (tenantName, queueDn, skillId, priorityBound, privateData, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.QueueDn + '=' + queueDn + '&';
      data += ipron.Parameter.SkillId + '=' + skillId + '&';
      data += ipron.Parameter.PriorityBound + '=' + priorityBound + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.GetQueueOrder + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetQueueOrderEx = function (tenantName, callId, queueDn, skillId, priorityBound, privateData, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.CallId + '=' + callId + '&';
      data += ipron.Parameter.QueueDn + '=' + queueDn + '&';
      data += ipron.Parameter.SkillId + '=' + skillId + '&';
      data += ipron.Parameter.PriorityBound + '=' + priorityBound + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.GetQueueOrderEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.UpdateUserdata = function (agentDn, tenantName, connectionId, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.AgentDn + '=' + agentDn;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.UpdateUserdata + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.DeleteKeyUserdata = function (agentDn, tenantName, connectionId, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.AgentDn + '=' + agentDn;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.DeleteKeyUserdata + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.DeleteAllUserdata = function (agentDn, tenantName, connectionId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.AgentDn + '=' + agentDn;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.DeleteAllUserdata + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SendUserEvent = function (agentDn, tenantName, destDn, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.AgentDn + '=' + agentDn;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.SendUserEvent + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetUserdata = function (tenantName, thisDn, connectionId, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.GetUserdata + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetConnState = function (thisDn, connectionId, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.GetConnState + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetANIUserdata = function (agentDn, aniNumber, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.AgentDn + '=' + agentDn + '&';
      data += ipron.Parameter.AniNumber + '=' + aniNumber;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.SetANIUserdata + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetUCIDUserdata = function (agentDn, ucid, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.AgentDn + '=' + agentDn + '&';
      data += ipron.Parameter.Ucid + '=' + ucid;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.SetUCIDUserdata + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MediaAttach = function (thisDn, callId, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.CallId + '=' + callId;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.MediaAttach + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MediaDeattach = function (thisDn, callId, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.CallId + '=' + callId;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.MediaDeattach + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MediaPlay = function (thisDn, callId, mediaId, duration, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.CallId + '=' + callId + '&';
      data += ipron.Parameter.MediaId + '=' + mediaId + '&';
      data += ipron.Parameter.Duration + '=' + duration;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.MediaPlay + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MediaCollect = function (thisDn, callId, mediaId, duration, termDigits, minDigits, maxDigits, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.CallId + '=' + callId + '&';
      data += ipron.Parameter.MediaId + '=' + mediaId + '&';
      data += ipron.Parameter.Duration + '=' + duration + '&';
      data += ipron.Parameter.TermDigits + '=' + termDigits + '&';
      data += ipron.Parameter.MinDigits + '=' + minDigits + '&';
      data += ipron.Parameter.MaxDigits + '=' + maxDigits;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.MediaCollect + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MCSConsultCall = function (thisDn, destDn, obCallingDn, connectionId, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ObCallingDn + '=' + obCallingDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.MCSConsultCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MCSReconnectCall = function (thisDn, connectionId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.MCSReconnectCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MCSTransferCall = function (thisDn, connectionId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.MCSTransferCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MCSOnestepTransferCall = function (thisDn, destDn, obCallingDn, connectionId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ObCallingDn + '=' + obCallingDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.MCSOnestepTransferCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MCSReroute = function (thisDn, destDn, obCallingDn, connectionId, virtualMediaId, failRouteDn, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ObCallingDn + '=' + obCallingDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.VirtualMediaId + '=' + virtualMediaId + '&';
      data += ipron.Parameter.Gdn + '=' + failRouteDn;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.MCSReroute + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.BSR = function (thisDn, queueDn) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.QueueDn + '=' + queueDn;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.BSR + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AdGetAgentSkillList = function (tenantName, destAgentId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestAgentId + '=' + destAgentId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetAgentSkillListEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AdGetAgentQueueList = function (tenantName, destAgentId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestAgentId + '=' + destAgentId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetAgentQueueListEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AdGetAgentList = function (tenantName, groupIdSet, queueDnSet, privateData, agentState, media_type) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentState + '=' + agentState + '&';
      data += ipron.Parameter.GroupIdSet + '=' + groupIdSet + '&';
      data += ipron.Parameter.QueueDnSet + '=' + queueDnSet + '&';
      data += ipron.Parameter.MediaType + '=' + media_type + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetAgentListEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AdGetGroupList = function (tenantName, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetGroupListEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AdGetQueueList = function (tenantName, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetQueueListEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AgentRptSubscribe = function (tenantName, agentId, duration, subscribeType, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.Duration + '=' + duration + '&';
      data += ipron.Parameter.SubscribeType + '=' + subscribeType + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.AgentRptSubscribe + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GroupRptSubscribe = function (tenantName, groupIdSet, duration, subscribeType, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.GroupIdSet + '=' + groupIdSet + '&';
      data += ipron.Parameter.Duration + '=' + duration + '&';
      data += ipron.Parameter.SubscribeType + '=' + subscribeType + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GroupRptSubscribe + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.QueueRptSubscribe = function (tenantName, queueDnSet, duration, subscribeType, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.QueueDnSet + '=' + queueDnSet + '&';
      data += ipron.Parameter.Duration + '=' + duration + '&';
      data += ipron.Parameter.SubscribeType + '=' + subscribeType + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.QueueRptSubscribe + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.TenantRptSubscribe = function (tenantName, duration, subscribeType, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.Duration + '=' + duration + '&';
      data += ipron.Parameter.SubscribeType + '=' + subscribeType + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.TenantRptSubscribe + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.DNISRptSubscribe = function (dnisSet, privateData, duration, subscribeType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.DnisSet + '=' + dnisSet + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.Duration + '=' + duration + '&';
      data += ipron.Parameter.SubscribeType + '=' + subscribeType;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.DnisRptSubscribe + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.CloseSubscribe = function (subscribeId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.SubscribeId + '=' + subscribeId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.CloseSubscribe + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetAgentInfoEx = function (tenantName, destAgentId, destDn, pbxLoginDn, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestAgentId + '=' + destAgentId + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.PbxLoginDn + '=' + pbxLoginDn + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetAgentInfoEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.DtmfPlay = function (thisDn, callId, duration, pauseDuration, playDigit, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.CallId + '=' + callId + '&';
      data += ipron.Parameter.Duration + '=' + duration + '&';
      data += ipron.Parameter.PauseDuration + '=' + pauseDuration + '&';
      data += ipron.Parameter.PlayDigit + '=' + playDigit;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.DtmfPlay + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.VirtualQueueRouting = function (destDn, connectionId, callId, privateData, mediaType, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.VirtualQueueRouting + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetCallback = function (tenantName, agentId, groupId, skillId, dateTime, ucid, srcMediaType, destMediaType, destInfo1, destInfo2, destInfo3) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.GroupId + '=' + groupId + '&';
      data += ipron.Parameter.SkillId + '=' + skillId + '&';
      data += ipron.Parameter.DateTime + '=' + dateTime + '&';
      data += ipron.Parameter.Ucid + '=' + ucid + '&';
      data += ipron.Parameter.SrcMediaType + '=' + srcMediaType + '&';
      data += ipron.Parameter.DestMediaType + '=' + destMediaType + '&';
      data += ipron.Parameter.DestInfo1 + '=' + destInfo1 + '&';
      data += ipron.Parameter.DestInfo2 + '=' + destInfo2 + '&';
      data += ipron.Parameter.DestInfo3 + '=' + destInfo3;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetCallback + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MediaDndReq = function (tenantName, agentId, mediaType, distribute) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.Distribute + '=' + distribute;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.MediaDnd + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.ReservedAgentState = function (tenantName, agentId, agentState, agentStateSub, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.AgentState + '=' + agentState + '&';
      data += ipron.Parameter.AgentStateSub + '=' + agentStateSub + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.ReservedAgentState + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SendGlobalEvent = function (agentDn, ucid, extension) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.AgentDn + '=' + agentDn + '&';
      data += ipron.Parameter.Ucid + '=' + ucid;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.SendGlobalEvent + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AgentCall = function (
    thisDn,
    destDn,
    obCallingDn,
    skillLevel,
    priority,
    relationAgentDn,
    relationAgentId,
    relationMethod,
    routeMethod,
    routeSkillId,
    routeGroupId,
    ucid,
    extension,
    mediaType,
    usePrevAgent,
    useDesignatedAgent,
    relationTimeout,
    hop,
  ) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ObCallingDn + '=' + obCallingDn + '&';
      data += ipron.Parameter.SkillLevel + '=' + skillLevel + '&';
      data += ipron.Parameter.Priority + '=' + priority + '&';
      data += ipron.Parameter.RelationAgentDn + '=' + relationAgentDn + '&';
      data += ipron.Parameter.RelationAgentId + '=' + relationAgentId + '&';
      data += ipron.Parameter.RelationMethod + '=' + relationMethod + '&';
      data += ipron.Parameter.RouteMethod + '=' + routeMethod + '&';
      data += ipron.Parameter.RouteSkillId + '=' + routeSkillId + '&';
      data += ipron.Parameter.RouteGroupId + '=' + routeGroupId + '&';
      data += ipron.Parameter.Ucid + '=' + ucid + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.UsePrevAgent + '=' + usePrevAgent + '&';
      data += ipron.Parameter.UseDesignatedAgent + '=' + useDesignatedAgent + '&';
      data += ipron.Parameter.RelationTimeout + '=' + relationTimeout + '&';
      data += ipron.Parameter.Hop + '=' + hop;
      data = encodeURI(data);
      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.AgentCall + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetMediaActivate = function () {
    if (ipron.IsConnected()) {
      var data = '';
      ipron.SendData(baseURL + ipron.Request.GetMediaActivate + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetRoutePolicy = function (tenantName, destDn, destAgentId, queueDn, skillId, mediaType, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.DestAgentId + '=' + destAgentId + '&';
      data += ipron.Parameter.QueueDn + '=' + queueDn + '&';
      data += ipron.Parameter.SkillId + '=' + skillId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetRoutePolicy + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetMediaReadyState = function (tenantName, agentId, mediaType, mediaReady) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.MediaReady + '=' + mediaReady;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetMediaReadyState + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetMediaReadyState = function (tenantName, agentId, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetMediaReadyState + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetUserCdr = function (connectionId, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetUserCdr + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetUserCdr = function (connectionId, userCdr, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.UserCdr + '=' + userCdr + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetUserCdr + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetDeviceMuteEnable = function (thisDn, connectionId, privateData, mediaType, enable) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.Enable + '=' + enable;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetDeviceMuteEnable + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.ReserveIrAttr = function (
    privateData,
    aniNumber,
    skillLevel,
    priority,
    usePrevAgent,
    useDesignatedAgent,
    relationAgentDn,
    relationAgentId,
    relationMethod,
    relationTimeout,
    routeMethod,
    routeSkillId,
    routeGroupId,
    mediaType,
  ) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.AniNumber + '=' + aniNumber + '&';
      data += ipron.Parameter.SkillLevel + '=' + skillLevel + '&';
      data += ipron.Parameter.Priority + '=' + priority + '&';
      data += ipron.Parameter.UsePrevAgent + '=' + usePrevAgent + '&';
      data += ipron.Parameter.UseDesignatedAgent + '=' + useDesignatedAgent + '&';
      data += ipron.Parameter.RelationAgentDn + '=' + relationAgentDn + '&';
      data += ipron.Parameter.RelationAgentId + '=' + relationAgentId + '&';
      data += ipron.Parameter.RelationMethod + '=' + relationMethod + '&';
      data += ipron.Parameter.RelationTimeout + '=' + relationTimeout + '&';
      data += ipron.Parameter.RouteMethod + '=' + routeMethod + '&';
      data += ipron.Parameter.RouteSkillId + '=' + routeSkillId + '&';
      data += ipron.Parameter.RouteGroupId + '=' + routeGroupId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.ReserveIrAttr + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.FindWaitIr = function (privateData, aniNumber) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.AniNumber + '=' + aniNumber;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.FindWaitIr + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetConnectionEx = function (destDn) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.DestDn + '=' + destDn;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetConnectionEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetCallInfo = function (callId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.CallId + '=' + callId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetCallInfo + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetCallInfoEx = function (callId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.CallId + '=' + callId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetCallInfoEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetUserCdrEx = function (connectionId, userCdrIndex, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.UserCdrIndex + '=' + userCdrIndex + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetUserCdrEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetUserCdrEx = function (connectionId, userCdrIndex, userCdr, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.UserCdrIndex + '=' + userCdrIndex + '&';
      data += ipron.Parameter.UserCdr + '=' + userCdr + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetUserCdrEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.AgentAdnLogin = function (tenantName, agentDn, pbxLoginDn, agentId, agentPassword, passwdType, agentState, agentStateSub, mediaSet) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentDn + '=' + agentDn + '&';
      data += ipron.Parameter.PbxLoginDn + '=' + pbxLoginDn + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.AgentPassword + '=' + agentPassword + '&';
      data += ipron.Parameter.PasswdType + '=' + passwdType + '&';
      data += ipron.Parameter.AgentState + '=' + agentState + '&';
      data += ipron.Parameter.AgentStateSub + '=' + agentStateSub + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.AgentAdnLogin + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetAgentStateData = function (tenantName, agentId, agentState, agentStateSub, mediaSet, customData1, customData2, customData3) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.AgentState + '=' + agentState + '&';
      data += ipron.Parameter.AgentStateSub + '=' + agentStateSub + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet + '&';
      data += ipron.Parameter.CustomData1 + '=' + customData1 + '&';
      data += ipron.Parameter.CustomData2 + '=' + customData2 + '&';
      data += ipron.Parameter.CustomData3 + '=' + customData3;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetAgentStateData + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetCategoryList = function (tenantName, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetCategoryList + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetCategoryInfo = function (tenantName, privateData, categoryId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.CategoryId + '=' + categoryId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetCategoryInfo + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetAgentMasterQueueInfo = function (tenantName, destDn, destAgentId, privateData, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.DestAgentId + '=' + destAgentId + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetAgentMasterQueueInfo + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetDeviceActivate = function (tenantName, destDn, mediaType, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;

      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetDeviceActivate + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetUserCdrV5 = function (connectionId, userCdrType, userCdrIndex, userCdr, privateData) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ConnectionId + '=' + connectionId + '&';
      data += ipron.Parameter.UserCdrType + '=' + userCdrType + '&';
      data += ipron.Parameter.UserCdrIndex + '=' + userCdrIndex + '&';
      data += ipron.Parameter.UserCdr + '=' + userCdr + '&';
      data += ipron.Parameter.PrivateData + '=' + privateData;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetUserCdrV5 + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.MuteTransferEx = function (thisDn, ActiveConnId, HeldConnId, destDn, extension, mediaType) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.ThisDn + '=' + thisDn + '&';
      data += ipron.Parameter.DestDn + '=' + destDn + '&';
      data += ipron.Parameter.ActiveConnID + '=' + ActiveConnId + '&';
      data += ipron.Parameter.HeldConnID + '=' + HeldConnId + '&';
      data += ipron.Parameter.MediaType + '=' + mediaType;
      data = encodeURI(data);

      if (IsValidExtHdl(extension)) {
        data += '&' + ipron.Parameter.ExtensionData + '=' + encodeURIComponent(ipron.GetExtensionData(extension));
      }

      ipron.SendData(baseURL + ipron.Request.MuteTransferEx + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetMediaOption = function (tenantName, agentId) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetMediaOption + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.SetMediaOption = function (tenantName, agentId, mediaSet, agtMediaWeight, agtMediaMax) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.AgentId + '=' + agentId + '&';
      data += ipron.Parameter.MediaSet + '=' + mediaSet + '&';
      data += ipron.Parameter.AgtMediaWeight + '=' + agtMediaWeight + '&';
      data += ipron.Parameter.AgtMediaMax + '=' + agtMediaMax;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.SetMediaOption + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetGroupSkillList = function (tenantName, groupid) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.GroupId + '=' + groupid;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetGroupSkillList + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  ipron.GetDeviceList = function (tenantName, devicetype) {
    if (ipron.IsConnected()) {
      var data = '';
      data += ipron.Parameter.TenantName + '=' + tenantName + '&';
      data += ipron.Parameter.DeviceType + '=' + devicetype;
      data = encodeURI(data);

      ipron.SendData(baseURL + ipron.Request.GetDeviceList + '?' + ipron.Parameter.Key + '=' + ipron.SessionKey + '&' + ipron.Parameter.Handle + '=' + ipron.Handle + '&' + data);
    }
  };

  // Common Function - SendData
  ipron.SendData = function (url, type) {
    if (ctiutil.isLog) console.log('SendData[' + url + ']');
    if (ipron.ConnectedServerIndex == 1) {
      url = protocol + '://' + ipron.ip1 + ':' + ipron.port1 + url;
    } else if (ipron.ConnectedServerIndex == 2) {
      url = protocol + '://' + ipron.ip2 + ':' + ipron.port2 + url;
    } else {
      return;
    }

    var nTimeout = 0;
    if (type == undefined) {
      // Request
      type = 'POST';
      nTimeout = 3000;
    } else {
      // Heartbeat
      nTimeout = ipron.hbPeriod * 1000 + 2000;
    }

    $.support.cors = true;
    var ajax = $.ajax({
      cache: false,
      crossDomain: true,
      url: url,
      type: type,
      dataType: 'json',
      data: '',
      timeout: nTimeout,
      success: CBAJAXSucc,
      failure: function (data) {
        if (ctiutil.isLog) console.log('ajax failure. data[' + data + ']');
        //ctiPage.openModal('서버장애', '서버연결(https://106.245.140.235:9203, https://106.245.140.236:9203)에 문제가 있습니다.');
        CBAJAXErr(data);
      },
      error: function (data, temp, error) {
        if (ctiutil.isLog) console.log(data);
        //ctiPage.openModal('서버장애', '서버연결(https://106.245.140.235:9203, https://106.245.140.236:9203)에 문제가 있습니다.');

        DeleteAllAjaxRequest();

        if (type == 'GET') {
          if (data.statusText == 'abort') {
          } else {
            ErrCnt = ErrCnt + 1;
            if (ErrCnt >= ipron.hbErrCnt) {
              ErrCnt = 0;
              CBAJAXErr(data, error);
              return;
            }

            if (data.statusText == 'timeout') {
              ipron.Heartbeat();
            } else if (data.statusText == 'error') {
              setTimeout('ipron.Heartbeat()', ipron.hbPeriod * 1000);
            } else {
              ipron.Heartbeat();
            }
          }
        } else if (type == 'POST') {
          var cbResult = {};
          cbResult.method = GetRequest(url);
          if (cbResult.method == ipron.Request.OpenServer) {
            CBAJAXErr(data, error);
            return;
          }

          cbResult.messagetype = ipron.MsgType.AjaxResponse;
          cbResult.result = ipron.JSONValue.False;
          ipron.cb_res(cbResult);

          if (data.statusText == 'abort') {
          } else {
            if (data.statusText == 'timeout') {
              ipron.Heartbeat();
            } else if (data.statusText == 'error') {
              setTimeout('ipron.Heartbeat()', ipron.hbPeriod * 1000);
            } else {
              ipron.Heartbeat();
            }
          }
        }
      },
    });

    arrAjax.push(ajax);
  };

  // AJAX Success Callback Function
  CBAJAXSucc = function (data) {
    //console.log(data);
    ErrCnt = 0;

    switch (data.messagetype) {
      case ipron.MsgType.AjaxResponse:
        AjaxResponseProcess(data);
        break;
      case ipron.MsgType.ICResponse:
        ICResponseProcess(data);
        break;
      case ipron.MsgType.ICEvent:
        ICEventProcess(data);
        break;
      case ipron.MsgType.Heartbeat:
        ipron.Heartbeat();
        break;
      default:
        break;
    }
  };

  AjaxResponseProcess = function (data) {
    if (data.method == ipron.Request.OpenServer) {
      if (data.result == ipron.JSONValue.True) {
        ipron.SessionKey = data.key;
        ConnectedState = ServerConnectState.Connected;
        ipron.Handle = data.handle;

        //console.log("ipron.Handle[" + ipron.Handle + "]");

        ipron.Heartbeat();
      } else {
        ConnectedState = ServerConnectState.Disconnected;
      }
    }

    if (data.method == ipron.Request.CloseServer && data.result == ipron.JSONValue.True) {
      ipron.SessionKey = '';
      ConnectedState = ServerConnectState.Disconnected;
      DeleteAllAjaxRequest();
    }
    ipron.cb_res(data);
  };

  ICResponseProcess = function (data) {
    // Extension
    if (data.extensiondata != undefined) {
      data.extensionhandle = SetExtensionData(data.extensiondata);
    }
    ipron.Heartbeat();

    // Advance List
    var extHandle = data.extensionhandle;
    var adLstHandle = 0;

    if (data.method == ipron.APIMethod.GETAGENTLIST_EX_RES) {
      adLstHandle = AdLstCreateList();
      for (var i = 0; i < ipron.EXTGetRecordCount(extHandle); i++) {
        var id = ipron.EXTGetKey(extHandle, i);
        var loginId, dn, name, state, stateSub, stateKeepTime, inOut, skillLevel;

        for (var j = 0; j < ipron.EXTGetValueCountForRecord(extHandle, i); j++) {
          switch (j) {
            case 0:
              loginId = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 1:
              dn = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 2:
              name = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 3:
              state = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 4:
              stateSub = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 5:
              stateKeepTime = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 6:
              inOut = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 7:
              skillLevel = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
          }
        }

        AdLstAddRow(adLstHandle, id, dn, loginId, name, state, stateSub, stateKeepTime, inOut, skillLevel, '', '');
      }
      data.advanceListHandle = adLstHandle;
    } else if (data.method == ipron.APIMethod.GETGROUPLIST_EX_RES) {
      adLstHandle = AdLstCreateList();
      for (var i = 0; i < ipron.EXTGetRecordCount(extHandle); i++) {
        var id = ipron.EXTGetKey(extHandle, i);
        var name;

        for (var j = 0; j < ipron.EXTGetValueCountForRecord(extHandle, i); j++) {
          switch (j) {
            case 0:
              name = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
          }
        }

        AdLstAddRow(adLstHandle, id, '', '', name, '', '', '', '', '', '', '');
      }
      data.advanceListHandle = adLstHandle;
    } else if (data.method == ipron.APIMethod.GETQUEUELIST_EX_RES) {
      adLstHandle = AdLstCreateList();
      for (var i = 0; i < ipron.EXTGetRecordCount(extHandle); i++) {
        var id = ipron.EXTGetKey(extHandle, i);
        var dn, name;

        for (var j = 0; j < ipron.EXTGetValueCountForRecord(extHandle, i); j++) {
          switch (j) {
            case 0:
              dn = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 1:
              name = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
          }
        }

        AdLstAddRow(adLstHandle, id, dn, '', name, '', '', '', '', '', '', '');
      }
      data.advanceListHandle = adLstHandle;
    } else if (data.method == ipron.APIMethod.GETAGENT_SKILLLIST_EX_RES) {
      adLstHandle = AdLstCreateList();
      for (var i = 0; i < ipron.EXTGetRecordCount(extHandle); i++) {
        var id = ipron.EXTGetKey(extHandle, i);
        var name, skillEnable;

        for (var j = 0; j < ipron.EXTGetValueCountForRecord(extHandle, i); j++) {
          switch (j) {
            case 0:
              name = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 1:
              skillEnable = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
          }
        }

        AdLstAddRow(adLstHandle, id, '', '', name, '', '', '', '', '', '', skillEnable);
      }
      data.advanceListHandle = adLstHandle;
    } else if (data.method == ipron.APIMethod.GETAGENT_QUEUELIST_EX_RES) {
      adLstHandle = AdLstCreateList();
      for (var i = 0; i < ipron.EXTGetRecordCount(extHandle); i++) {
        var id = ipron.EXTGetKey(extHandle, i);
        var name, dn, skillId;

        for (var j = 0; j < ipron.EXTGetValueCountForRecord(extHandle, i); j++) {
          switch (j) {
            case 0:
              name = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 1:
              dn = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
            case 2:
              skillId = ipron.EXTGetValueForRecord(extHandle, i, j);
              break;
          }
        }

        AdLstAddRow(adLstHandle, id, dn, '', name, '', '', '', '', '', skillId, '');
      }
      data.advanceListHandle = adLstHandle;
    }

    ipron.cb_res(data);
  };

  ICEventProcess = function (data) {
    if (data.method == ipron.APIEvent.ACTIVE_TIMEOUT) {
      ConnectedState = ServerConnectState.Disconnected;
    } else {
      // Extension
      if (data.extensiondata != undefined) {
        data.extensionhandle = SetExtensionData(data.extensiondata);
      }
      ipron.Heartbeat();
    }
    ipron.cb_evt(data);
  };

  // AJAX Error Callback Function
  CBAJAXErr = function (data, error) {
    DeleteAllAjaxRequest();

    if (error != 'abort') {
      if (ipron.ConnectedServerIndex == 1) ipron.ConnectedServerIndex = 2;
      else ipron.ConnectedServerIndex = 1;

      if (ConnectedState == ServerConnectState.Connected) {
        ConnectedState = ServerConnectState.Disconnected;
        data.method = ipron.WebEvent.ERR_DISCONNECT;
        ipron.cb_evt(data);
      } else if (ConnectedState == ServerConnectState.Trying_1st) {
        ConnectedState = ServerConnectState.Trying_2nd;
        ipron.OpenServer(ipron.app_name, ipron.cb_evt, ipron.cb_res);
      } else if (ConnectedState == ServerConnectState.Trying_2nd) {
        ConnectedState = ServerConnectState.Disconnected;
        data.method = ipron.WebEvent.ERR_OPENSERVER;
        ipron.cb_evt(data);
      }
    }
  };

  // Delete All Ajax Request
  DeleteAllAjaxRequest = function () {
    for (var i = 0; i < arrAjax.length; i++) {
      arrAjax[i].abort();
    }
    arrAjax.length = 0;
  };

  // Check Connect State
  ipron.IsConnected = function () {
    if (ConnectedState == ServerConnectState.Connected) {
      return true;
    } else {
      return false;
    }
  };

  // --- Extension Function ---
  var arrExt = {};
  var extensionIndex = 0;
  function SetExtensionData(data) {
    var handle = ipron.EXTCreateExtension();
    arrExt[handle] = data;
    return handle;
  }
  function IsValidExtHdl(handle) {
    if (handle > 0 && handle < 101) return true;
    else return false;
  }
  ipron.EXTCreateExtension = function () {
    extensionIndex++;
    if (extensionIndex > 100) {
      extensionIndex = 1;
    }
    arrExt[extensionIndex] = {};
    return extensionIndex;
  };
  ipron.EXTDeleteExtension = function (handle) {
    arrExt[handle] = {};
  };
  ipron.GetExtensionData = function (handle) {
    return JSON.stringify(arrExt[handle]);
  };
  ipron.EXTAddRecord = function (handle, key, value) {
    var extension = arrExt[handle];
    if (extension == undefined) {
      extension = {};
    }
    if (extension['' + key] == undefined) {
      extension['' + key] = value;
    } else {
      if (isArray(extension['' + key])) {
        extension['' + key].push(value);
      } else {
        var arr = new Array();
        arr.push(extension['' + key]);
        arr.push(value);

        extension['' + key] = arr;
      }
    }
    arrExt[handle] = extension;
    //console.log(extension);
  };
  ipron.EXTDeleteRecord = function (handle, key) {
    var extension = arrExt[handle];
    if (extension['' + key] == undefined) {
    } else {
      delete extension['' + key];
    }
    arrExt[handle] = extension;
    //console.log(extension);
  };
  ipron.EXTDeleteValue = function (handle, key, value) {
    var extension = arrExt[handle];
    if (Array.isArray(extension['' + key])) {
      extension['' + key] = extension['' + key].filter(function (x) {
        return x != value;
      });
      if (extension['' + key].length == 0) {
        delete extension['' + key];
      }
    } else {
      delete extension['' + key];
    }
    arrExt[handle] = extension;
    //console.log(extension);
  };
  ipron.EXTGetRecordCount = function (handle) {
    if (handle == undefined || handle == 0) return 0;
    var extension = arrExt[handle];

    if (Object.keys) {
      return Object.keys(extension).length;
    } else {
      var cnt = 0;
      for (var i in extension) {
        cnt++;
      }
      return cnt;
    }
  };
  ipron.EXTGetValueCountForRecord = function (handle, record) {
    return ipron.EXTGetValueCountForKey(handle, ipron.EXTGetKey(handle, record));
  };
  ipron.EXTGetValueCountForKey = function (handle, key) {
    var extension = arrExt[handle];
    if (isArray(extension['' + key])) {
      return extension['' + key].length;
    } else {
      if (extension['' + key] == undefined) {
        return 0;
      } else {
        return 1;
      }
    }
  };
  ipron.EXTGetKey = function (handle, record) {
    var extension = arrExt[handle];

    if (Object.keys) {
      return Object.keys(extension)[record];
    } else {
      var cnt = 0;
      for (var i in extension) {
        if (cnt == record) {
          return i;
        }
        cnt++;
      }
      return cnt;
    }

    return Object.keys(extension)[record];
  };
  ipron.EXTGetValueForRecord = function (handle, record, field) {
    return ipron.EXTGetValueForKey(handle, ipron.EXTGetKey(handle, record), field);
  };
  ipron.EXTGetValueForKey = function (handle, key, field) {
    var extension = arrExt[handle];
    if (isArray(extension['' + key])) {
      return extension['' + key][field];
    } else {
      if (field == 0) {
        return extension['' + key];
      } else {
        return undefined;
      }
    }
  };

  // Advance List
  //var listOptionCnt = 11;
  var arrAdList = {};
  var adListIndex = 0; // 1 ~ 512
  function AdLstCreateList() {
    adListIndex++;
    if (adListIndex > 512) {
      adListIndex = 1;
    }
    arrAdList[adListIndex] = {};
    return adListIndex;
  }
  function AdLstAddRow(handle, id, dn, loginId, name, state, stateSub, stateKeepTime, inOut, skillLevel, skillId, skillEnable) {
    var adList = arrAdList[handle];
    if (adList == undefined) {
      adList = {};
    }

    var rowArr = new Array(id, dn, loginId, name, state, stateSub, stateKeepTime, inOut, skillLevel, skillId, skillEnable);

    var cnt = AdLstGetCount(handle);
    if (cnt != undefined) {
      adList[cnt] = rowArr;
    }
  }
  function AdLstAddRowArray(handle, arr) {
    var adList = arrAdList[handle];
    if (adList == undefined) {
      adList = {};
    }

    var cnt = AdLstGetCount(handle);
    if (cnt != undefined) {
      adList[cnt] = arr;
    }
  }
  function AdLstGetRow(handle, row) {
    var adList = arrAdList[handle];
    return adList[row];
  }
  function AdLstGetCount(handle) {
    if (handle == undefined || handle == 0) return;

    var rowArr = arrAdList[handle];
    if (Object.keys) {
      return Object.keys(rowArr).length;
    } else {
      var cnt = 0;
      for (var i in rowArr) {
        cnt++;
      }
      return cnt;
    }
  }
  ipron.GetListItem = function (listId, listIndex, listOption) {
    var adList = arrAdList[listId];
    var rowArr = adList[listIndex];
    return rowArr[listOption];
  };
  ipron.GetListItemFilter = function (listId, listOption, listFilter) {
    if (!(typeof listFilter == 'string' && listFilter.length > 0)) {
      return;
    }

    var filterHandle = 0;
    var filterLen = listFilter.length;
    var firstString = listFilter[0];
    var lastString = listFilter[filterLen - 1];
    var existData = false;

    if (firstString == '%' && lastString != '%') {
      var filterStr = listFilter.substring(1, filterLen);
      for (var i = 0; i < AdLstGetCount(listId); i++) {
        var listItem = ipron.GetListItem(listId, i, listOption);
        if (listItem.lastIndexOf(filterStr) >= 0) {
          if (listItem.lastIndexOf(filterStr) + filterStr.length == listItem.length) {
            if (existData == false) {
              filterHandle = AdLstCreateList();
              existData = true;
            }
            var rowArr = AdLstGetRow(listId, i);
            AdLstAddRowArray(filterHandle, rowArr);
          }
        }
      }
    } else if (firstString != '%' && lastString == '%') {
      var filterStr = listFilter.substring(0, filterLen - 1);
      for (var i = 0; i < AdLstGetCount(listId); i++) {
        var listItem = ipron.GetListItem(listId, i, listOption);
        if (listItem.indexOf(filterStr) == 0) {
          if (existData == false) {
            filterHandle = AdLstCreateList();
            existData = true;
          }
          var rowArr = AdLstGetRow(listId, i);
          AdLstAddRowArray(filterHandle, rowArr);
        }
      }
    } else if (firstString == '%' && lastString == '%') {
      var filterStr = listFilter.substring(1, filterLen - 1);
      for (var i = 0; i < AdLstGetCount(listId); i++) {
        var listItem = ipron.GetListItem(listId, i, listOption);
        if (listItem.indexOf(filterStr) != -1) {
          if (existData == false) {
            filterHandle = AdLstCreateList();
            existData = true;
          }
          var rowArr = AdLstGetRow(listId, i);
          AdLstAddRowArray(filterHandle, rowArr);
        }
      }
    } else if (firstString != '%' && lastString != '%') {
      var filterStr = listFilter;
      for (var i = 0; i < AdLstGetCount(listId); i++) {
        var listItem = ipron.GetListItem(listId, i, listOption);
        if (listItem == filterStr) {
          if (existData == false) {
            filterHandle = AdLstCreateList();
            existData = true;
          }
          var rowArr = AdLstGetRow(listId, i);
          AdLstAddRowArray(filterHandle, rowArr);
        }
      }
    }

    return filterHandle;
  };
  ipron.GetListItemCnt = function (listId) {
    return AdLstGetCount(listId);
  };

  function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  function GetRequest(url) {
    var nStart = url.indexOf('/ic/');
    var nLast = url.indexOf('?');
    return url.substring(nStart + 4, nLast);
  }
})((window.ipron = {}));

(function (client) {
  client.SetProtocol = function (Protocol) {
    ipron.SetProtocol(Protocol);
    ctiFunc.AddpushEvent('ipron.SetProtocol(' + Protocol + ')');
  };
  client.SetServerInfo = function (IP1, PORT, IP2, PORT) {
    ipron.SetServerInfo(IP1, PORT, IP2, PORT);
    ctiFunc.AddpushEvent('ipron.SetServerInfo(' + IP1 + ',' + PORT + ',' + IP2 + ',' + PORT + ')');
  };

  client.OpenServer = function (name, cb_evt, cb_res) {
    ipron.OpenServer(name, cb_evt, cb_res);
    ctiFunc.AddpushEvent('ipron.OpenServer(' + name + ',CBFuncEvent,CBFuncResponse)');
  };

  client.Register = function (dn, tenant) {
    ipron.Register(dn, tenant);
    ctiFunc.AddpushEvent('ipron.Register(' + dn + ',' + tenant + ')');
  };

  client.Unregister = function (dn, tenant) {
    ipron.Unregister(dn, tenant);
    ctiFunc.AddpushEvent('ipron.Unregister(' + dn + ',' + tenant + ')');
  };

  client.AgentLogin = function (dn, agentId, agentPwd, tenant, agentState, agentStateSub, extension, passwdType, mediaSet) {
    ipron.AgentLogin(dn, agentId, '', tenant, agentState, agentStateSub, extension, passwdType, mediaSet);
    ctiFunc.AddpushEvent(
      'ipron.AgentLogin(' + dn + ',' + agentId + ',' + agentPwd + ',' + tenant + ',' + agentState + ',' + agentStateSub + ',' + extension + ',' + passwdType + ',' + mediaSet + ')',
    );
  };

  client.AgentLogout = function (dn, agentId, tenant, extension) {
    ipron.AgentLogout(dn, agentId, tenant, 0);
    ctiFunc.AddpushEvent('ipron.AgentLogout(' + dn + ',' + agentId + ',' + tenant + ',0)');
  };

  client.GetAgentInfoEx = function (tenantName, destAgentId, destDn, pbxLoginDn, privateData) {
    ipron.GetAgentInfoEx(tenantName, destAgentId, destDn, pbxLoginDn, privateData);
    ctiFunc.AddpushEvent('ipron.GetAgentInfoEx()');
  };

  client.GetAgentInfo = function (tenantName, destAgentId, privateData) {
    ipron.GetAgentInfo(tenantName, destAgentId, privateData);
    ctiFunc.AddpushEvent('ipron.GetAgentInfo()');
  };

  client.GetStateSubcode = function (tenant, agentState) {
    ipron.GetStateSubcode(tenant, agentState);
    ctiFunc.AddpushEvent('ipron.GetStateSubcode(' + tenant + ',' + agentState + ')');
  };

  client.SetAFTCallState = function (agentId, tenantName, agentState, agentStateSub, mediaSet) {
    ipron.SetAFTCallState(agentId, tenantName, agentState, agentStateSub, mediaSet);
    ctiFunc.AddpushEvent('ipron.SetAFTCallState(' + agentId + ',' + tenantName + ',' + agentState + ',' + agentStateSub + ',' + mediaSet + ')');
  };

  client.SetAgentState = function (agentId, tenantName, agentState, agentStateSub, extension, mediaSet) {
    ipron.SetAgentState(agentId, tenantName, agentState, agentStateSub, extension, mediaSet);
    ctiFunc.AddpushEvent('ipron.SetAgentState(' + agentId + ',' + tenantName + ',' + agentState + ',' + agentStateSub + ',' + extension + ',' + mediaSet + ')');
  };

  client.GetAgentState = function (tenantName, destAgentId, privateData, extension, mediaSet) {
    ipron.GetAgentState(tenantName, destAgentId, privateData, extension, mediaSet);
    ctiFunc.AddpushEvent('ipron.GetAgentState(' + tenantName + ',' + destAgentId + ',' + privateData + ',' + extension + ',' + mediaSet + ')');
  };

  client.MakeCall = function (
    thisDn,
    destDn,
    obCallingDn,
    skillLevel,
    priority,
    relationAgentDn,
    relationAgentId,
    relationMethod,
    routeMethod,
    routeSkillId,
    routeGroupId,
    Ucid,
    extension,
    mediaType,
    usePrevAgent,
    useDesignatedAgent,
    relationTimeout,
  ) {
    ipron.MakeCall(
      thisDn,
      destDn,
      obCallingDn,
      skillLevel,
      priority,
      relationAgentDn,
      relationAgentId,
      relationMethod,
      routeMethod,
      routeSkillId,
      routeGroupId,
      Ucid,
      extension,
      mediaType,
      usePrevAgent,
      useDesignatedAgent,
      relationTimeout,
    );
    ctiFunc.AddpushEvent(
      'ipron.MakeCall(' +
        thisDn +
        ',' +
        destDn +
        ',' +
        obCallingDn +
        ',' +
        skillLevel +
        ',' +
        priority +
        ',' +
        relationAgentDn +
        ',' +
        relationAgentId +
        relationMethod +
        ',' +
        routeMethod +
        ',' +
        routeSkillId +
        ',' +
        routeGroupId +
        ',' +
        Ucid +
        ',' +
        extension +
        ',' +
        mediaType +
        ',' +
        usePrevAgent +
        ',' +
        useDesignatedAgent +
        ',' +
        relationTimeout +
        ')',
    );
  };

  client.ClearCall = function (dn, connectionId, extension, mediaType) {
    ipron.ClearCall(dn, connectionId, extension, mediaType);
    ctiFunc.AddpushEvent('ipron.ClearCall(' + dn + ',' + connectionId + ',' + extension + ',' + mediaType + ')');
  };

  client.HoldCall = function (dn, connectionId, extension, mediaType) {
    ipron.HoldCall(dn, connectionId, extension, mediaType);
    ctiFunc.AddpushEvent('ipron.HoldCall(' + dn + ',' + connectionId + ',' + extension + ',' + mediaType + ')');
  };

  client.RetrieveCall = function (dn, connectionId, extension, mediaType) {
    ipron.RetrieveCall(dn, connectionId, extension, mediaType);
    ctiFunc.AddpushEvent('ipron.RetrieveCall(' + dn + ',' + connectionId + ',' + extension + ',' + mediaType + ')');
  };

  client.AnswerCall = function (dn, connectionId, extension, mediaType) {
    ipron.AnswerCall(dn, connectionId, extension, mediaType);
    ctiFunc.AddpushEvent('ipron.AnswerCall(' + dn + ',' + connectionId + ',' + extension + ',' + mediaType + ')');
  };

  //client.SinglestepTransfer($("#g_Dn3").val(), $("#TextConnId").val(), $("#g_transferdn").val(), $("#g_obcallingdn").val(), 0, 0, 0, 0, 0, 0, 0, 0, $("#TextExHandle").val(), 0, 0, 0, 0);
  client.SinglestepTransfer = function (
    thisDn,
    connectionId,
    destDn,
    obCallingDn,
    skillLevel,
    priority,
    relationAgentDn,
    relationAgentId,
    relationMethod,
    routeMethod,
    routeSkillId,
    routeGroupId,
    extension,
    mediaType,
    usePrevAgent,
    useDesignatedAgent,
    relationTimeout,
  ) {
    ipron.SinglestepTransfer(
      thisDn,
      connectionId,
      destDn,
      obCallingDn,
      skillLevel,
      priority,
      relationAgentDn,
      relationAgentId,
      relationMethod,
      routeMethod,
      routeSkillId,
      routeGroupId,
      extension,
      mediaType,
      usePrevAgent,
      useDesignatedAgent,
      relationTimeout,
    );
    ctiFunc.AddpushEvent(
      'ipron.SinglestepTransfer(' +
        thisDn +
        ',' +
        connectionId +
        ',' +
        destDn +
        ',' +
        obCallingDn +
        ',' +
        skillLevel +
        ',' +
        priority +
        ',' +
        relationAgentDn +
        ',' +
        relationAgentId +
        ',' +
        relationMethod +
        ',' +
        routeMethod +
        ',' +
        routeSkillId +
        ',' +
        routeGroupId +
        ',' +
        extension +
        ',' +
        mediaType +
        ',' +
        usePrevAgent +
        ',' +
        useDesignatedAgent +
        ',' +
        relationTimeout +
        ')',
    );
  };
  //client.MuteTransfer($("#g_Dn3").val(), $("#TextConnId").val(), $("#g_transferdn").val(),  $("#TextExHandle").val(), 0);
  client.MuteTransfer = function (thisDn, connectionId, destDn, extension, mediaType) {
    ipron.MuteTransfer(thisDn, connectionId, destDn, extension, mediaType);
  };

  client.CloseServer = function () {
    ipron.CloseServer();
    ctiFunc.AddpushEvent('ipron.CloseServer()');

    // $("#b_OpenServer").removeAttr("disabled");
    // $("#b_CloseServer").attr("disabled",true);
    // $("#b_Register").attr("disabled",true);
    // $("#b_Unregister").attr("disabled",true);
  };

  client.GetQueueList = function (tenantName, privateData) {
    ipron.GetQueueList(tenantName, privateData);
    ctiFunc.AddpushEvent('ipron.GetQueueList(' + tenantName + ',' + privateData + ')');
  };

  client.GetAgentQueueList = function (tenantName, privateData) {
    ipron.GetAgentQueueList(tenantName, privateData);
    ctiFunc.AddpushEvent('ipron.GetQueueList(' + tenantName + ',' + privateData + ')');
  };

  client.QueueReport = function (tenantName, queueDnSet, mediaSet) {
    ipron.QueueReport(tenantName, queueDnSet, mediaSet);
    ctiFunc.AddpushEvent('ipron.QueueReport(' + tenantName + ',' + queueDnSet + ',' + mediaSet + ')');
  };

  client.GetGroupList = function (tenantName, privateData) {
    ipron.GetGroupList(tenantName, privateData);
    ctiFunc.AddpushEvent('ipron.GetGroupList(' + tenantName + ',' + privateData + ')');
  };
})((window.client = {}));

(function (subscribePage) {
  subscribePage.AgentSubscribe = function (
    id,
    in_total,
    in_success,
    in_talk_time,
    out_total,
    out_success,
    out_talk_time,
    transfer_calls,
    login_time,
    logout_time,
    in_int_suc,
    in_ext_suc,
    in_con_suc,
    out_int_suc,
    out_ext_suc,
    out_con_suc,
    ringing_time,
    dialing_time,
    ready_time,
    notready_time,
    acw_time,
  ) {
    //TextSubscribeId.value = id;

    var msg = '';
    msg += 'Agent Report \n';
    msg += 'Inbound Total : ' + in_total.toString() + '\n';
    msg += 'Inbound 성공 : ' + in_success.toString() + '\n';
    msg += 'Inbound 통화시간 : ' + in_talk_time.toString() + '\n';
    msg += 'Outbound Total : ' + out_total.toString() + '\n';
    msg += 'Outbound 성공 : ' + out_success.toString() + '\n';
    msg += 'Outbound 통화시간 : ' + out_talk_time.toString() + '\n';
    msg += '전환 호 합계 : ' + transfer_calls.toString() + '\n';
    msg += '최근 로그인 시각 : ' + login_time + '\n';
    msg += '최근 로그아웃 시각 : ' + logout_time + '\n';
    msg += '내선 인바운드 통화수 : ' + in_int_suc.toString() + '\n';
    msg += '국선 인바운드 통화수 : ' + in_ext_suc.toString() + '\n';
    msg += '협의 인바운드 통화수 : ' + in_con_suc.toString() + '\n';
    msg += '내선 아웃바운드 통화수 : ' + out_int_suc.toString() + '\n';
    msg += '국선 아웃바운드 통화수 : ' + out_ext_suc.toString() + '\n';
    msg += '협의 아웃바운드 통화수 : ' + out_con_suc.toString() + '\n';
    msg += '벨울림 시간 : ' + ringing_time.toString() + '\n';
    msg += '다이얼링 시간 : ' + dialing_time.toString() + '\n';
    msg += '수신대기상태 시간 : ' + ready_time.toString() + '\n';
    msg += '자리비움상태 시간 : ' + notready_time.toString() + '\n';
    msg += '후 처리상태 시간 : ' + acw_time.toString() + '\n';

    return msg;
  };

  subscribePage.GroupSubscribe = function GroupSubscribe(data) {
    //data.subscribeid;

    var msg = '';
    msg += 'Group Report \n';
    msg += '응답호 대기시간 평균 : ' + data.answaitavr + '\n';
    msg += '내선 인바운드 인입 호 수 : ' + data.ininttot + '\n';
    msg += '내선 인바운드 성공 통화 수 : ' + data.inintsuc + '\n';
    msg += '국선 인바운드 인입 호 수 : ' + data.inexttot + '\n';
    msg += '국선 인바운드 성공 통화 수 : ' + data.inextsuc + '\n';
    msg += '내선 아웃바운드 통화 시도 수 : ' + data.outinttot + '\n';
    msg += '내선 아웃바운드 성공 통화 수 : ' + data.outintsuc + '\n';
    msg += '국선 아웃바운드 통화 시도 수 : ' + data.outexttot + '\n';
    msg += '국선 아웃바운드 성공 통화 수 : ' + data.outextsuc + '\n';
    msg += '내선 인바운드 통화 시간 합계 : ' + data.ininttalktime + '\n';
    msg += '국선 인바운드 통화 시간 합계 : ' + data.inexttalktime + '\n';
    msg += '전체 상담원 수 : ' + data.allagentcount + '\n';
    msg += '로그인 상담원 수 : ' + data.loginagentcount + '\n';
    msg += '수신대기 상담원 수 : ' + data.readyagentcount + '\n';
    msg += '벨울림 상담원 수 : ' + data.ringingcount + '\n';
    msg += '다이얼링 상담원 수 : ' + data.dialingcount + '\n';
    msg += '내선 인바운드 통화 중 상담원 수 : ' + data.ibintbusyagt + '\n';
    msg += '국선 인바운드 통화 중 상담원 수 : ' + data.ibextbusyagt + '\n';
    msg += '내선 아웃바운드 통화 중 상담원 수: ' + data.obintbusyagt + '\n';
    msg += '국선 아웃바운드 통화 중 상담원 수 : ' + data.obextbusyagt + '\n';
    msg += '후처리 상담원 수 : ' + data.aftworkagentcount + '\n';
    msg += '자리비움 상담원 수 : ' + data.notreadyagentcount + '\n';

    return msg;
  };

  subscribePage.QueueSubscribe = function QueueSubscribe(data) {
    //data.subscribeid;

    var msg = '';
    msg += 'Queue Report \n';
    msg += '대기호 : ' + data.waitcount + '\n';
    msg += '현재 대기호 최대 대기 시간 : ' + data.maxwaittime + '\n';
    msg += '현재 대기호 대기시간 합계 : ' + data.waittimesum + '\n';
    msg += '인입호 : ' + data.inboundtotal + '\n';
    msg += '응답호 : ' + data.accepttotal + '\n';
    msg += 'Non-Service 처리호 : ' + data.nonsvctotal + '\n';
    msg += '서비스 레벨 이내 응답호 : ' + data.svcaccepttotal + '\n';
    msg += '서비스 레벨 이내 포기호 : ' + data.svcabandontotal + '\n';
    msg += '포기호 : ' + data.abandontotal + '\n';
    msg += '거부호 : ' + data.rejecttotal + '\n';
    msg += '응답률 : ' + data.acceptratio + '\n';
    msg += '내선 아웃바운드 통화 시도 수 : ' + data.outinttot + '\n';
    msg += '내선 아웃바운드 성공 통화 수 : ' + data.outintsuc + '\n';
    msg += '국선 아웃바운드 통화 시도 수 : ' + data.outexttot + '\n';
    msg += '국선 아웃바운드 성공 통화 수 : ' + data.outextsuc + '\n';
    msg += '응답호 총 통화시간 : ' + data.accepttalktimesum + '\n';
    msg += '서비스 레벨 타임 : ' + data.svclvltime + '\n';
    msg += '서비스 레벨 : ' + data.svclevel + '\n';
    msg += '전체 상담원 수 : ' + data.allagentcount + '\n';
    msg += '로그인 상담원 수 : ' + data.loginagentcount + '\n';
    msg += '수신대기 상담원 수 : ' + data.readyagentcount + '\n';
    msg += '벨울림 상담원 수 : ' + data.ringingcount + '\n';
    msg += '다이얼링 상담원 수 : ' + data.dialingcount + '\n';
    msg += '내선 인바운드 통화 중 상담원 수 : ' + data.ibintbusyagt + '\n';
    msg += '국선 인바운드 통화 중 상담원 수 : ' + data.ibextbusyagt + '\n';
    msg += '내선 아웃바운드 통화 중 상담원 수 : ' + data.obintbusyagt + '\n';
    msg += '국선 아웃바운드 통화 중 상담원 수 : ' + data.obextbusyagt + '\n';
    msg += '후처리 상담원 수 : ' + data.aftworkagentcount + '\n';
    msg += '자리비움 상담원 수 : ' + data.notreadyagentcount + '\n';

    return msg;
  };

  subscribePage.TenantSubscribe = function (data) {
    //data.subscribeid;

    var msg = '';
    msg += 'Tenant Report \n';
    msg += '현재 인바운드 큐 대기호 : ' + data.waitcount + '\n';
    msg += '현재 인바운드 대기호 최대 대기 시간 : ' + data.maxwaittime + '\n';
    msg += '현재 인바운드 대기호 대기시간 합계 : ' + data.waittimesum + '\n';
    msg += 'IVR 인입호 : ' + data.ivrtotal + '\n';
    msg += 'IVR 포기호 : ' + data.ivrabandon + '\n';
    msg += 'IVR 전환호 : ' + data.ivrdodtrns + '\n';
    msg += '인바운드 큐 인입호 : ' + data.ivricqtrns + '\n';
    msg += '인바운드 큐 응답호 : ' + data.icqaccept + '\n';
    msg += '인바운드 큐 서비스 레벨 이내 응답호 : ' + data.icqsvclvlaccept + '\n';
    msg += '인바운드 큐 서비스 레벨 이내 포기호 : ' + data.icqsvclvlabandon + '\n';
    msg += '인바운드 큐 포기호 : ' + data.icqabandon + '\n';
    msg += '인바운드 큐 거부호 : ' + data.icqreject + '\n';
    msg += 'Non-Service 처리호 : ' + data.nonsvctotal + '\n';
    msg += '국선 아웃바운드 시도 호 : ' + data.outexttot + '\n';
    msg += '국선 아웃바운드 성공 호 : ' + data.outextsuc + '\n';
    msg += '인바운드 큐 응답률 : ' + data.icqacceptratio + '\n';
    msg += '인바운드 통화 시간 합계 : ' + data.intalktime + '\n';
    msg += '아웃바운드 통화 시간 합계 : ' + data.outtalktime + '\n';
    msg += '서비스 레벨 : ' + data.svclevel + '\n';
    msg += '전체 상담원 수 : ' + data.allagentcount + '\n';
    msg += '로그인 상담원 수 : ' + data.loginagentcount + '\n';
    msg += '수신대기 상담원 수 : ' + data.readyagentcount + '\n';
    msg += '벨울림 상담원 수 : ' + data.ringingcount + '\n';
    msg += '다이얼링 상담원 수 : ' + data.dialingcount + '\n';
    msg += '내선 인바운드 통화 중 상담원 수 : ' + data.ibintbusyagt + '\n';
    msg += '국선 인바운드 통화 중 상담원 수 : ' + data.ibextbusyagt + '\n';
    msg += '내선 아웃바운드 통화 중 상담원 수 : ' + data.obintbusyagt + '\n';
    msg += '국선 아웃바운드 통화 중 상담원 수 : ' + data.obextbusyagt + '\n';
    msg += '후처리 상담원 수 : ' + data.aftworkagentcount + '\n';
    msg += '자리비움 상담원 수 : ' + data.notreadyagentcount + '\n';

    return msg;
  };

  subscribePage.DnisSubscribe = function (
    id,
    inbound_total,
    abandon_total,
    agt_try,
    agt_try_abandon,
    reject_total,
    accept_total,
    non_svc_total,
    ivr_svc_count,
    wait_count,
    inbusy_agent_count,
    ivr_agt_conf_count,
  ) {
    TextSubscribeId.value = id;

    var msg = '';
    msg += 'Dnis Report \n';
    msg += '인입호 수 : ' + inbound_total + '\n';
    msg += '포기호 수 : ' + abandon_total + '\n';
    msg += '상담원 연결 시도호 수 : ' + agt_try + '\n';
    msg += '상담원 연결 시도후 포기호 수 : ' + agt_try_abandon + '\n';
    msg += '상담원 거부호 수 : ' + reject_total + '\n';
    msg += '상담원 연결 성공호 수 : ' + accept_total + '\n';
    msg += 'Non-Service 처리호 수 : ' + non_svc_total + '\n';
    msg += '현재 IVR 청취 고객호 수 : ' + ivr_svc_count + '\n';
    msg += '현재 CTI Queue 대기호 수 : ' + wait_count + '\n';
    msg += '현재 상담원 통화호 수 : ' + inbusy_agent_count + '\n';
    msg += '현재 상담원 IVR 3자 통화호 수 : ' + ivr_agt_conf_count + '\n';

    return msg;
  };

  subscribePage.QueueTraffic = function (
    svc_lvl_time,
    svc_level,
    wait_count,
    all_agent_count,
    login_agent_count,
    ready_agent_count,
    inbusy_agent_count,
    outbusy_agent_count,
    aft_agent_count,
    notready_agent_count,
    ringing_count,
    inbound_total,
    accept_total,
    abandon_total,
    trans_backup,
    answer_count_avr,
    talktime_count_avr,
    wait_time,
    max_wait_time,
    min_wait_time,
    wait_time_avr,
    wait_time_sum,
    distribute_wait_coun,
  ) {
    var msg = '';

    msg += 'Queue Traffic \n';
    msg += '서비스 레벨 타임 : ' + svc_lvl_time.toString() + '\n';
    msg += '서비스 레벨 : ' + svc_level.toString() + '\n';
    msg += '대기호 : ' + wait_count.toString() + '\n';
    msg += '전체 상담원 : ' + all_agent_count.toString() + '\n';
    msg += '로그인 중인 상담원 : ' + login_agent_count.toString() + '\n';
    msg += '대기중인 상담원 : ' + ready_agent_count.toString() + '\n';
    msg += 'Inbusy 상담원 : ' + inbusy_agent_count.toString() + '\n';
    msg += 'Outbusy 상담원 : ' + outbusy_agent_count.toString() + '\n';
    msg += '후 처리 중인 상담원 : ' + aft_agent_count.toString() + '\n';
    msg += '자리 비움 중인 상담원 : ' + notready_agent_count.toString() + '\n';
    msg += '벨 울림 상태 수 : ' + ringing_count.toString() + '\n';
    msg += '당일 큐 인입호 : ' + inbound_total.toString() + '\n';
    msg += '당일 큐 응대호 : ' + accept_total.toString() + '\n';
    msg += '당일 큐 포기호 : ' + abandon_total.toString() + '\n';
    msg += 'Backup Queue DN 전환 호 수 : ' + trans_backup.toString() + '\n';
    msg += '상담원 별 평균 응대호 : ' + answer_count_avr.toString() + '\n';
    msg += '상담원 별 평균 통화 시간 : ' + talktime_count_avr.toString() + '\n';
    msg += '예상 대기 시간 : ' + wait_time.toString() + '\n';
    msg += '최장 대기 시간 : ' + max_wait_time.toString() + '\n';
    msg += '최소 대기 시간 : ' + min_wait_time.toString() + '\n';
    msg += '대기 시간 평균 : ' + wait_time_avr.toString() + '\n';
    msg += '대기 시간 합계 : ' + wait_time_sum.toString() + '\n';
    msg += '분배 대기호 수 : ' + distribute_wait_coun.toString() + '\n';

    return msg;
  };

  subscribePage.AgentReport = function (
    in_total,
    in_success,
    in_talk_time,
    out_total,
    out_success,
    out_talk_time,
    transfer_calls,
    login_time,
    logout_time,
    in_int_suc,
    in_ext_suc,
    in_con_suc,
    out_int_suc,
    out_ext_suc,
    out_con_suc,
    ringing_time,
    dialing_time,
    ready_time,
    notready_time,
    acw_time,
  ) {
    var msg = '';

    msg += 'Agent Report \n';
    msg += 'Inbound Total : ' + in_total.toString() + '\n';
    msg += 'Inbound 성공 : ' + in_success.toString() + '\n';
    msg += 'Inbound 통화시간 : ' + in_talk_time.toString() + '\n';
    msg += 'Outbound Total : ' + out_total.toString() + '\n';
    msg += 'Outbound 성공 : ' + out_success.toString() + '\n';
    msg += 'Outbound 통화시간 : ' + out_talk_time.toString() + '\n';
    msg += '전환 호 합계 : ' + transfer_calls.toString() + '\n';
    msg += '최근 로그인 시각 : ' + login_time + '\n';
    msg += '최근 로그아웃 시각 : ' + logout_time + '\n';
    msg += '내선 인바운드 통화수 : ' + in_int_suc.toString() + '\n';
    msg += '국선 인바운드 통화수 : ' + in_ext_suc.toString() + '\n';
    msg += '협의 인바운드 통화수 : ' + in_con_suc.toString() + '\n';
    msg += '내선 아웃바운드 통화수 : ' + out_int_suc.toString() + '\n';
    msg += '국선 아웃바운드 통화수 : ' + out_ext_suc.toString() + '\n';
    msg += '협의 아웃바운드 통화수 : ' + out_con_suc.toString() + '\n';
    msg += '벨울림 시간 : ' + ringing_time.toString() + '\n';
    msg += '다이얼링 시간 : ' + dialing_time.toString() + '\n';
    msg += '수신대기상태 시간 : ' + ready_time.toString() + '\n';
    msg += '자리비움상태 시간 : ' + notready_time.toString() + '\n';
    msg += '후 처리상태 시간 : ' + acw_time.toString() + '\n';

    return msg;
  };

  subscribePage.ReportOutput = function (data) {
    console.log(data);
  };

  subscribePage.GroupReport = function (data) {
    var msg = '';
    var szExt = '';

    msg += 'Group Report \n';
    msg += '응답호 대기시간 평균 : ' + data.answaitavr + '\n';
    msg += '내선 인바운드 인입 호 수 : ' + data.ininttot + '\n';
    msg += '내선 인바운드 성공 통화 수 : ' + data.inintsuc + '\n';
    msg += '국선 인바운드 인입 호 수 : ' + data.inexttot + '\n';
    msg += '국선 인바운드 성공 통화 수 : ' + data.inextsuc + '\n';
    msg += '내선 아웃바운드 통화 시도 수 : ' + data.outinttot + '\n';
    msg += '내선 아웃바운드 성공 통화 수 : ' + data.outintsuc + '\n';
    msg += '국선 아웃바운드 통화 시도 수 : ' + data.outexttot + '\n';
    msg += '국선 아웃바운드 성공 통화 수 : ' + data.outextsuc + '\n';
    msg += '내선 인바운드 통화 시간 합계 : ' + data.ininttalktime + '\n';
    msg += '국선 인바운드 통화 시간 합계 : ' + data.inexttalktime + '\n';
    msg += '전체 상담원 수 : ' + data.allagentcount + '\n';
    msg += '로그인 상담원 수 : ' + data.loginagentcount + '\n';
    msg += '수신대기 상담원 수 : ' + data.readyagentcount + '\n';
    msg += '벨울림 상담원 수 : ' + data.ringingcount + '\n';
    msg += '다이얼링 상담원 수 : ' + data.dialingcount + '\n';
    msg += '내선 인바운드 통화 중 상담원 수 : ' + data.ibintbusyagt + '\n';
    msg += '국선 인바운드 통화 중 상담원 수 : ' + data.ibextbusyagt + '\n';
    msg += '내선 아웃바운드 통화 중 상담원 수: ' + data.obintbusyagt + '\n';
    msg += '국선 아웃바운드 통화 중 상담원 수 : ' + data.obextbusyagt + '\n';
    msg += '후처리 상담원 수 : ' + data.aftworkagentcount + '\n';
    msg += '자리비움 상담원 수 : ' + data.notreadyagentcount + '\n';

    return msg;
  };

  subscribePage.QueueReport = function (data) {
    var msg = '';
    var szExt = '';

    msg += 'Queue Report \n';
    msg += '대기호 : ' + data.waitcount + '\n';
    msg += '현재 대기호 최대 대기 시간 : ' + data.maxwaittime + '\n';
    msg += '현재 대기호 대기시간 합계 : ' + data.waittimesum + '\n';
    msg += '인입호 : ' + data.inboundtotal + '\n';
    msg += '응답호 : ' + data.accepttotal + '\n';
    msg += 'Non-Service 처리호 : ' + data.nonsvctotal + '\n';
    msg += '서비스 레벨 이내 응답호 : ' + data.svcaccepttotal + '\n';
    msg += '서비스 레벨 이내 포기호 : ' + data.svcabandontotal + '\n';
    msg += '포기호 : ' + data.abandontotal + '\n';
    msg += '거부호 : ' + data.rejecttotal + '\n';
    msg += '응답률 : ' + data.acceptratio + '\n';
    msg += '내선 아웃바운드 통화 시도 수 : ' + data.outinttot + '\n';
    msg += '내선 아웃바운드 성공 통화 수 : ' + data.outintsuc + '\n';
    msg += '국선 아웃바운드 통화 시도 수 : ' + data.outexttot + '\n';
    msg += '국선 아웃바운드 성공 통화 수 : ' + data.outextsuc + '\n';
    msg += '응답호 총 통화시간 : ' + data.accepttalktimesum + '\n';
    msg += '서비스 레벨 타임 : ' + data.svclvltime + '\n';
    msg += '서비스 레벨 : ' + data.svclevel + '\n';
    msg += '전체 상담원 수 : ' + data.allagentcount + '\n';
    msg += '로그인 상담원 수 : ' + data.loginagentcount + '\n';
    msg += '수신대기 상담원 수 : ' + data.readyagentcount + '\n';
    msg += '벨울림 상담원 수 : ' + data.ringingcount + '\n';
    msg += '다이얼링 상담원 수 : ' + data.dialingcount + '\n';
    msg += '내선 인바운드 통화 중 상담원 수 : ' + data.ibintbusyagt + '\n';
    msg += '국선 인바운드 통화 중 상담원 수 : ' + data.ibextbusyagt + '\n';
    msg += '내선 아웃바운드 통화 중 상담원 수 : ' + data.obintbusyagt + '\n';
    msg += '국선 아웃바운드 통화 중 상담원 수 : ' + data.obextbusyagt + '\n';
    msg += '후처리 상담원 수 : ' + data.aftworkagentcount + '\n';
    msg += '자리비움 상담원 수 : ' + data.notreadyagentcount + '\n';

    return msg;
  };

  subscribePage.TenantReport = function (data) {
    var msg = '';
    var szExt = '';

    msg += 'Tenant Report \n';
    msg += '현재 인바운드 큐 대기호 : ' + data.waitcount + '\n';
    msg += '현재 인바운드 대기호 최대 대기 시간 : ' + data.maxwaittime + '\n';
    msg += '현재 인바운드 대기호 대기시간 합계 : ' + data.waittimesum + '\n';
    msg += 'IVR 인입호 : ' + data.ivrtotal + '\n';
    msg += 'IVR 포기호 : ' + data.ivrabandon + '\n';
    msg += 'IVR 전환호 : ' + data.ivrdodtrns + '\n';
    msg += '인바운드 큐 인입호 : ' + data.ivricqtrns + '\n';
    msg += '인바운드 큐 응답호 : ' + data.icqaccept + '\n';
    msg += '인바운드 큐 서비스 레벨 이내 응답호 : ' + data.icqsvclvlaccept + '\n';
    msg += '인바운드 큐 서비스 레벨 이내 포기호 : ' + data.icqsvclvlabandon + '\n';
    msg += '인바운드 큐 포기호 : ' + data.icqabandon + '\n';
    msg += '인바운드 큐 거부호 : ' + data.icqreject + '\n';
    msg += 'Non-Service 처리호 : ' + data.nonsvctotal + '\n';
    msg += '국선 아웃바운드 시도 호 : ' + data.outexttot + '\n';
    msg += '국선 아웃바운드 성공 호 : ' + data.outextsuc + '\n';
    msg += '인바운드 큐 응답률 : ' + data.icqacceptratio + '\n';
    msg += '인바운드 통화 시간 합계 : ' + data.intalktime + '\n';
    msg += '아웃바운드 통화 시간 합계 : ' + data.outtalktime + '\n';
    msg += '서비스 레벨 : ' + data.svclevel + '\n';
    msg += '전체 상담원 수 : ' + data.allagentcount + '\n';
    msg += '로그인 상담원 수 : ' + data.loginagentcount + '\n';
    msg += '수신대기 상담원 수 : ' + data.readyagentcount + '\n';
    msg += '벨울림 상담원 수 : ' + data.ringingcount + '\n';
    msg += '다이얼링 상담원 수 : ' + data.dialingcount + '\n';
    msg += '내선 인바운드 통화 중 상담원 수 : ' + data.ibintbusyagt + '\n';
    msg += '국선 인바운드 통화 중 상담원 수 : ' + data.ibextbusyagt + '\n';
    msg += '내선 아웃바운드 통화 중 상담원 수 : ' + data.obintbusyagt + '\n';
    msg += '국선 아웃바운드 통화 중 상담원 수 : ' + data.obextbusyagt + '\n';
    msg += '후처리 상담원 수 : ' + data.aftworkagentcount + '\n';
    msg += '자리비움 상담원 수 : ' + data.notreadyagentcount + '\n';

    return msg;
  };

  subscribePage.MakeOpenServerResult = function (result) {
    var str;

    switch (result) {
      case -24:
        str = 'IC Server 와 Interface Version 이 다릅니다.';
        break;
      case -23:
        str = 'Win32 OCX Error. OCX의 Event 를 전달 받을 HWND 핸들이 없습니다. InitAPI() 함수 호출 후 사용';
        break;
      case -22:
        str = '이미 연결되어 있는 Socket 의 IP와 지금 연결 하려는 IP 정보가 다릅니다';
        break;
      case -21:
        str = '입력값 중에 NULL값 또는 잘못된 데이터가 있습니다';
        break;
      case -20:
        str = 'OpenServer 최대 개수 초과';
        break;
      case -19:
        str = '재접속 시도중입니다';
        break;
      case -18:
        str = '보내려는 패킷크기가 너무 큽니다.';
        break;
      case -17:
        str = 'Memory 할당 실패';
        break;
      case -16:
        str = '대기 시간 초과';
        break;
      case -15:
        str = 'Thread Stop 실패';
        break;
      case -14:
        str = '데이터 전송 실패';
        break;
      case -13:
        str = 'Extension Data 처리 오류';
        break;
      case -12:
        str = '핸들값 에러';
        break;
      case -11:
        str = '이미 연결 되어 있음';
        break;
      case -10:
        str = 'Thread 생성 실패';
        break;
      case -9:
        str = 'Response 실패';
        break;
      case -8:
        str = 'Event 대기 실패';
        break;
      case -7:
        str = '데이터 전송 실패';
        break;
      case -6:
        str = '소켓 에러';
        break;
      case -5:
        str = 'Password 암호화 실패';
        break;
      case -4:
        str = 'DN 값이 잘못된 형식입니다.(DN 은 0~9, *, # 문자만 가능합니다)';
        break;
      case -3:
        str = 'Out형 변수의 값이 NULL 입니다.';
        break;
      case -2:
        str = 'Socket 연결이 끊겼습니다.';
        break;
      case -1:
        str = 'Register 된 DN를 찾지 못하였습니다';
        break;
      default:
        str = '알수 없는 에러 코드 : [' + result + ']';
        break;
    }

    return str;
  };
  subscribePage.MakeICConnectionState = function MakeICConnectionState(state) {
    var str;
    switch (state) {
      case 0:
        str = 'Null';
        break;
      case 1:
        str = 'Initiated';
        break;
      case 2:
        str = 'Alerting';
        break;
      case 3:
        str = 'Connected';
        break;
      case 4:
        str = 'Hold';
        break;
      case 5:
        str = 'Queued';
        break;
      case 6:
        str = 'Failed';
        break;
      case 7:
        str = 'Deleted';
        break;
      default:
        str = '알수 없는 코드';
        break;
    }
    return str;
  };

  subscribePage.GetConnectionExLog = function GetConnectionExLog(handle) {
    var i = 0,
      j = 0;
    var nRecord = 0;
    nField = 0;
    var strKey, strValue;
    var str = '';

    nRecord = ipron.EXTGetRecordCount(handle);

    if (ctiutil.isLog) console.log('=========' + nRecord);

    for (i = 0; i < nRecord; i++) {
      strKey = ipron.EXTGetKey(handle, i);
      str += 'ConnectionId : ' + strKey + ' | ';

      nField = ipron.EXTGetValueCountForRecord(handle, i);
      for (j = 0; j < nField; j++) {
        strValue = ipron.EXTGetValueForRecord(handle, i, j);

        if (j == 0) {
          if (strValue == '0') {
            str += 'MediaType : Voice';
          } else if (strValue == '80') {
            str += 'MediaType : Web';
          }
        } else if (j == 1) {
          if (strValue == '1') {
            str += ' | State : Initiated';
          } else if (strValue == '2') {
            str += ' | State : Alerting';
          } else if (strValue == '3') {
            str += ' | State : Connected';
          } else if (strValue == '4') {
            str += ' | State : Hold';
          } else if (strValue == '5') {
            str += ' | State : Queued';
          } else if (strValue == '6') {
            str += ' | State : Failed';
          } else if (strValue == '7') {
            str += ' | State : Deleted';
          }
        } else if (j == 2) {
          str += ' | CallId : ' + strValue;
        }
      }
      str += '\n';
    }

    return str;
  };

  subscribePage.DnisReport = function (
    inbound_total,
    abandon_total,
    agt_try,
    agt_try_abandon,
    reject_total,
    accept_total,
    non_svc_total,
    ivr_svc_count,
    wait_count,
    inbusy_agent_count,
    ivr_agt_conf_count,
  ) {
    var msg = '';

    msg += 'Dnis Report \n';
    msg += '인입호 수 : ' + inbound_total + '\n';
    msg += '포기호 수 : ' + abandon_total + '\n';
    msg += '상담원 연결 시도호 수 : ' + agt_try + '\n';
    msg += '상담원 연결 시도후 포기호 수 : ' + agt_try_abandon + '\n';
    msg += '상담원 거부호 수 : ' + reject_total + '\n';
    msg += '상담원 연결 성공호 수 : ' + accept_total + '\n';
    msg += 'Non-Service 처리호 수 : ' + non_svc_total + '\n';
    msg += '현재 IVR 청취 고객호 수 : ' + ivr_svc_count + '\n';
    msg += '현재 CTI Queue 대기호 수 : ' + wait_count + '\n';
    msg += '현재 상담원 통화호 수 : ' + inbusy_agent_count + '\n';
    msg += '현재 상담원 IVR 3자 통화호 수 : ' + ivr_agt_conf_count + '\n';

    return msg;
  };
})((window.subscribePage = {}));

(function (ctiFunc) {
  /*전역변수 AREA*/
  ctiFunc.TextSessionKey = '';
  ctiFunc.bReconnect = false;
  //이벤트 처리
  ctiFunc.CBFuncEvent = function (data) {
    var log = '[' + data.method + ']';
    var rtnLog = '';
    //alert('CBFuncEvent:' + data.method);
    //이벤트가 발생하면
    //$('#b_AnswerCall').attr('class', 'btn-cti type3 outline-red');


    switch (data.method) {
      case ipron.APIEvent.RINGING: // ringing
        log += ' Ringing. ThisDn[' + data.thisdn + ']';
        rtnLog += 'RINGING' + '--' + JSON.stringify(data);
        ctiPage.eventName = 'RINGING';
        $button_joinus = $('.button_joinus').attr('disabled', true);

        $('#b_MakeCall').attr('disabled', true);
        $('#b_AnswerCall').removeAttr('disabled');
        $('#b_ClearCall').attr('disabled', true);
        $('#b_SinglestepTransfer').attr('disabled', true);
        $('#b_RetrieveCall').attr('disabled', true);
        $('#b_HoldCall').attr('disabled', true);


        //벨이 울리면 받기만 활성화
        //ctiPage.chk_agentState('50', true); //상담중
        break;
      case ipron.APIEvent.ESTABLISHED: // establish
        log += ' Establish. ThisDn[' + data.thisdn + ']';
        rtnLog += 'ESTABLISHED' + '--' + JSON.stringify(data);
        ctiPage.eventSubName = 'ESTABLISHED';

        $('#b_MakeCall').attr('disabled', true);
        $('#b_AnswerCall').attr('disabled', true);
        $('#b_ClearCall').removeAttr('disabled');
        $('#b_SinglestepTransfer').removeAttr('disabled');
        $('#b_RetrieveCall').removeAttr('disabled');
        $('#b_HoldCall').removeAttr('disabled');
        //고객이 전화를 받으면
        ctiPage.chk_agentState('50', true); //상담중
        break;
      case ipron.APIEvent.RELEASED: //released
        log += ' Released. ThisDn[' + data.thisdn + ']';
        rtnLog += 'RELEASED' + '--' + JSON.stringify(data);
        ctiPage.eventName = 'RELEASED';
        $('#b_MakeCall').removeAttr('disabled');
        $('#b_AnswerCall').attr('disabled', true);
        $('#b_ClearCall').attr('disabled', true);
        $('#b_SinglestepTransfer').attr('disabled', true);
        $('#b_RetrieveCall').attr('disabled', true);
        $('#b_HoldCall').attr('disabled', true);
        //벨이 끝기면 걸기만 활성화
        //ctiPage.cti_SetAFTCallState('60');
        //ctiPage.cti_GetAgentState();

        break;
      case ipron.APIEvent.DIALING: // dialing
        log += ' Dialing. ThisDn[' + data.thisdn + ']';
        rtnLog += 'DIALING' + '--' + JSON.stringify(data);
        ctiPage.eventName = 'DIALING';
        $('#b_MakeCall').attr('disabled', true);
        $('#b_AnswerCall').attr('disabled', true);
        $('#b_ClearCall').removeAttr('disabled');
        $('#b_SinglestepTransfer').removeAttr('disabled');
        $('#b_RetrieveCall').removeAttr('disabled');
        $('#b_HoldCall').removeAttr('disabled');

        //전화를 걸면 걸기만 비활성화
        ctiPage.chk_agentState('50', true);

        break;
      case ipron.APIEvent.ABANDONED: // abandoned
        log += ' Abandoned. ThisDn[' + data.thisdn + ']';
        rtnLog += 'ABANDONED' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.DESTBUSY: // dest busy
        log += ' DestBusy. ThisDn[' + data.thisdn + ']';
        rtnLog += 'DESTBUSY' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.HELD: // held
        log += ' Held. ThisDn[' + data.thisdn + ']';
        rtnLog += 'HELD' + '--' + JSON.stringify(data);
        ctiPage.eventSubName = 'HELD';

        $('#b_MakeCall').attr('disabled', true);
        $('#b_AnswerCall').attr('disabled', true);
        $('#b_ClearCall').attr('disabled', true);
        $('#b_SinglestepTransfer').removeAttr('disabled');
        $('#b_RetrieveCall').removeAttr('disabled');
        $('#b_HoldCall').attr('disabled', true);
        //보류시

        break;
      case ipron.APIEvent.RETRIEVED: // retrieved
        log += ' Retrieved. ThisDn[' + data.thisdn + ']';
        rtnLog += 'RETRIEVED' + '--' + JSON.stringify(data);
        ctiPage.eventSubName = 'RETRIEVED';

        $('#b_MakeCall').attr('disabled', true);
        $('#b_AnswerCall').attr('disabled', true);
        $('#b_ClearCall').attr('disabled', true);
        $('#b_SinglestepTransfer').removeAttr('disabled');
        $('#b_RetrieveCall').attr('disabled', true);
        $('#b_HoldCall').removeAttr('disabled');
        //연결시

        break;
      case ipron.APIEvent.PARTYADDED: // party added
        log += ' PartyAdded. ThisDn[' + data.thisdn + ']';
        rtnLog += 'PARTYADDED' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.PARTYCHANGED: // party changed
        log += ' PartyChanged. ThisDn[' + data.thisdn + ']';
        rtnLog += 'PARTYCHANGED' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.PARTYDELETED: // party deleted
        log += ' PartyDeleted. ThisDn[' + data.thisdn + ']';
        rtnLog += 'PARTYDELETED' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.QUEUED: // queued
        log += ' Queued. ThisDn[' + data.thisdn + ']';
        rtnLog += 'QUEUED' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.DIVERTED: // diverted
        log += ' Diverted. ThisDn[' + data.thisdn + ']';
        rtnLog += 'DIVERTED' + '--' + JSON.stringify(data);

        ctiPage.chk_agentStateSub('0', true); //부재중
        ctiPage.swatSaveCti('swatSaveCti', 'default');
        //ctiPage.closeModal();
        break;
      //부재중

      case ipron.APIEvent.ACDAGENT_LOGGEDON: // acd Login
        log += ' ACD Login. ThisDn[' + data.thisdn + '] AgentID[' + data.agentid + ']';
        rtnLog += 'ACDAGENT_LOGGEDON' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.ACDAGENT_LOGGEDOFF: // acd Logout
        log += ' ACD Logout. ThisDn[' + data.thisdn + '] AgentID[' + data.agentid + ']';
        rtnLog += 'ACDAGENT_LOGGEDOFF' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.ACDAGENT_NOTREADY: // acd NotReady
        log += ' ACD NotReady. ThisDn[' + data.thisdn + '] AgentID[' + data.agentid + ']';
        rtnLog += 'ACDAGENT_NOTREADY' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.ACDAGENT_READY: // acd Ready
        log += ' ACD Ready. ThisDn[' + data.thisdn + '] AgentID[' + data.agentid + ']';
        rtnLog += 'ACDAGENT_READY' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.ACDAGENT_WORKAFTCALL: // acd AFTCall
        log += ' ACD AFTCall. ThisDn[' + data.thisdn + '] AgentID[' + data.agentid + ']';
        rtnLog += 'ACDAGENT_WORKAFTCALL' + '--' + JSON.stringify(data);
        //후처리

        break;
      case ipron.APIEvent.AGENTLOGIN: // agent login
        log += ' AgentLogin. AgentID[' + data.agentid + '] VoipState[' + data.voipagentstate;
        log += '] VoipStateSub[' + data.voipagentstatesub + ']';
        rtnLog += 'AGENTLOGIN' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.AGENTLOGOUT: // agent logout
        log += ' AgentLogout. AgentID[' + data.agentid + ']';
        rtnLog += 'AGENTLOGOUT' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.AGENTREADY: // agent ready
        log += ' AgentReady. AgentID[' + data.agentid + ']';
        log += ' Agent State[' + data.agentstate + '] SubState[' + data.agentstatesub + ']';
        rtnLog += 'AGENTREADY' + '--' + JSON.stringify(data);
        ctiPage.eventName = 'AGENTREADY';
        $('#b_MakeCall').removeAttr('disabled');
        $('#b_AnswerCall').attr('disabled', true);
        $('#b_ClearCall').attr('disabled', true);
        $('#b_SinglestepTransfer').attr('disabled', true);
        $('#b_RetrieveCall').attr('disabled', true);
        $('#b_HoldCall').attr('disabled', true);

        if (data.agentstate == '30') ctiPage.chk_agentStateSub(data.agentstatesub, false);
        else ctiPage.chk_agentState(data.agentstate, false);

        window.setTimeout(ctiutil.banishment, 3000);

        break;
      case ipron.APIEvent.AGENTNOTREADY: // agent not ready
        log += ' AgentNotReady. AgentID[' + data.agentid + ']';
        log += ' Agent State[' + data.agentstate + '] SubState[' + data.agentstatesub + ']';
        rtnLog += 'AGENTNOTREADY' + '--' + JSON.stringify(data);
        ctiPage.eventName = 'AGENTNOTREADY';

        $('#b_MakeCall').attr('disabled', true);
        $('#b_AnswerCall').attr('disabled', true);
        $('#b_ClearCall').attr('disabled', true);
        $('#b_SinglestepTransfer').attr('disabled', true);
        $('#b_RetrieveCall').attr('disabled', true);
        $('#b_HoldCall').attr('disabled', true);

        if (data.agentstate == '30') ctiPage.chk_agentStateSub(data.agentstatesub, false);
        else ctiPage.chk_agentState(data.agentstate, false);

        break;
      case ipron.APIEvent.AGENTACW: // agent acw
        log += ' AgentAcw. AgentID[' + data.agentid + ']';
        log += ' Agent State[' + data.agentstate + '] SubState[' + data.agentstatesub + ']';
        rtnLog += 'AGENTACW' + '--' + JSON.stringify(data);
        if (data.agentstate == '30') ctiPage.chk_agentStateSub(data.agentstatesub, false);
        else ctiPage.chk_agentState(data.agentstate, false);

        ctiPage.swatSaveCti('swatSaveCti', 'acw');

        break;
      case ipron.APIEvent.REGISTERED: // registered
        log += ' Registered. ThisDn[' + data.thisdn + ']';
        log += ' result[' + ctiFunc.MakeResult(data.result) + ']';
        rtnLog += 'REGISTERED' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.UNREGISTERED: // unregistered
        log += ' Unregistered. ThisDn[' + data.thisdn + ']';
        log += ' result[' + ctiFunc.MakeResult(data.result) + ']';
        rtnLog += 'UNREGISTERED' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.UPDATE_USERDATA: // update userdata
        log += ' UpdateUserdata. UpdateDn[' + data.updatedn + ']';
        rtnLog += 'UPDATE_USERDATA' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.USEREVENT: // user event
        log += ' UserEvent. SenderDn[' + data.senderdn + ']';
        rtnLog += 'USEREVENT' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.INITIATED: // initiated
        log += ' Initiated. ThisDn[' + data.thisdn + ']';
        rtnLog += 'INITIATED' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.AGENTINREADY: // agent in ready
        log += ' AgentInReady. ThisDn[' + data.thisdn + ']';
        log += ' Agent State[' + data.agentstate + ']';
        rtnLog += 'AGENTINREADY' + '--' + JSON.stringify(data);

        ctiPage.eventName = 'AGENTINREADY';
        $('#b_MakeCall').removeAttr('disabled');
        $('#b_AnswerCall').attr('disabled', true);
        $('#b_ClearCall').attr('disabled', true);
        $('#b_SinglestepTransfer').attr('disabled', true);
        $('#b_RetrieveCall').attr('disabled', true);
        $('#b_HoldCall').attr('disabled', true);

        ctiPage.chk_agentState(data.agentstate, false);

        break;
      case ipron.APIEvent.AGENTOUTREADY: // agent out ready
        log += ' AgentOutReady. ThisDn[' + data.thisdn + ']';
        log += ' Agent State[' + data.agentstate + ']';
        rtnLog += 'AGENTOUTREADY' + '--' + JSON.stringify(data);

        ctiPage.eventName = 'AGENTOUTREADY';

        $('#b_MakeCall').attr('disabled', true);
        $('#b_AnswerCall').attr('disabled', true);
        $('#b_ClearCall').attr('disabled', true);
        $('#b_SinglestepTransfer').attr('disabled', true);
        $('#b_RetrieveCall').attr('disabled', true);
        $('#b_HoldCall').attr('disabled', true);

        ctiPage.chk_agentState(data.agentstate, false);

        break;
      case ipron.APIEvent.MEDIAPLAY: // media play
        log += ' MediaPlay. ThisDn[' + data.thisdn + ']';
        rtnLog += 'MEDIAPLAY' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.MEDIACOLLECT: // media collect
        log += ' MediaCollect. ThisDn[' + data.thisdn + ']digits[' + data.digits + ']';
        rtnLog += 'MEDIACOLLECT' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.BANISHMENT: // banishment
        log += ' Banishment. DestDn[' + data.destdn + ']';
        //console.log(data);
        rtnLog += 'BANISHMENT' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.ACDAGENT_BUSY: // acd agent busy
        log += ' AcdAgentBusy. ThisDn[' + data.thisdn + ']';
        rtnLog += 'ACDAGENT_BUSY' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.MCS_REROUTE: // reroute
        log += ' Reroute. ThisDn[' + data.thisdn + ']';
        rtnLog += 'MCS_REROUTE' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.VIRTUAL_MEDIA_CREATE: // virtual media create
        log += ' VirtualMediaCreate. QueueDn[' + data.queuedn + ']';
        rtnLog += 'VIRTUAL_MEDIA_CREATE' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.VIRTUAL_MEDIA_DISTRIBUTE: // virtual media distribute
        log += ' VirtualMediaDistribute. QueueDn[' + data.queuedn + ']';
        rtnLog += 'VIRTUAL_MEDIA_DISTRIBUTE' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.VIRTUAL_MEDIA_DELETE: // virtual media delete
        log += ' VirtualMediaDelete. QueueDn[' + data.queuedn + ']';
        rtnLog += 'VIRTUAL_MEDIA_DELETE' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.DEVICE_DND: // device dnd
        log += ' Device DND. AgentDn[' + data.agentdn + '] AgentId[' + data.agentid + ']';
        rtnLog += 'DEVICE_DND' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.HASTATE_CHANGED: // ha state changed
        log += ' HaStateChanged. HaState[' + data.hastate + ']';
        rtnLog += 'HASTATE_CHANGED' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.AGENT_SSCRIBE_PUSH: // agent subscribe push
        log += ' Agent Subscribe Push.';
        rtnLog += 'AGENT_SSCRIBE_PUSH' + '--' + JSON.stringify(data);
        subscribePage.AgentSubscribe(
          data.subscribeid,
          data.intotal,
          data.insuccess,
          data.intalktime,
          data.outtotal,
          data.outsuccess,
          data.outtalktime,
          data.transfercalls,
          data.logintime,
          data.logouttime,
          data.inintsuc,
          data.inextsuc,
          data.inconsuc,
          data.outintsuc,
          data.outextsuc,
          data.outconsuc,
          data.ringingtime,
          data.dialingtime,
          data.readytime,
          data.notreadytime,
          data.acwtime,
        );
        break;
      case ipron.APIEvent.GROUP_SSCRIBE_PUSH: // agent subscribe push
        log += ' Group Subscribe Push.';
        rtnLog += 'GROUP_SSCRIBE_PUSH' + '--' + JSON.stringify(data);
        subscribePage.GroupSubscribe(data);
        break;
      case ipron.APIEvent.QUEUE_SSCRIBE_PUSH: // agent subscribe push
        log += ' Queue Subscribe Push.';
        rtnLog += 'QUEUE_SSCRIBE_PUSH' + '--' + JSON.stringify(data);
        subscribePage.QueueSubscribe(data);
        break;
      case ipron.APIEvent.TENANT_SSCRIBE_PUSH: // agent subscribe push
        log += ' Tenant Subscribe Push.';
        rtnLog += 'TENANT_SSCRIBE_PUSH' + '--' + JSON.stringify(data);
        subscribePage.TenantSubscribe(data);
        break;
      case ipron.APIEvent.DNIS_SSCRIBE_PUSH: // agent subscribe push
        log += ' Dnis Subscribe Push.';
        rtnLog += 'DNIS_SSCRIBE_PUSH' + '--' + JSON.stringify(data);
        subscribePage.DnisSubscribe(
          data.subscribeid,
          data.inboundtotal,
          data.abandontotal,
          data.agttry,
          data.agttryabandon,
          data.rejecttotal,
          data.accepttotal,
          data.nonsvctotal,
          data.ivrsvccount,
          data.waitcount,
          data.inbusyagentcount,
          data.ivragtconfcount,
        );
        break;
      case ipron.APIEvent.NEW_NOTICE: // Notice
        log += ' New Notice.';
        rtnLog += 'NEW_NOTICE' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.CALLBACK_DISTRIBUTE: // Callback
        log += ' Callback.';
        rtnLog += 'CALLBACK_DISTRIBUTE' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.MEDIA_ENABLED: //Media Enabled
        log += ' Media Enabled. AgentID[' + data.agentid + '] MediaType[' + data.mediatype + '] Enable [' + data.enable + ']';
        rtnLog += 'MEDIA_ENABLED' + '--' + JSON.stringify(data);
        break;
      case ipron.APIEvent.MEDIA_READY: // Media Ready
        log += ' Media Ready. AgentID[' + data.agentid + '] MediaType[' + data.mediatype + '] MediaReady [' + data.mediaready + ']';
        rtnLog += 'MEDIA_READY' + '--' + JSON.stringify(data);
        break;
      default:
        break;
    }

    switch (data.method) {
      case ipron.APIEvent.INITIATED: // initiated
        $('#TextThisDn').val(data.thisdn);
        $('#TextUCID').val(data.ucid);
        $('#TextHop').val(data.hop);
        $('#TextPrevConnId').val($('#TextConnId').val());
        $('#TextConnId').val(data.connectionid);
        $('#TextCallId').val(data.callid);
        ctiPage.icConnId = data.connectionid; //e.conn_id;
        ctiPage.icPrevConnId = $('#TextPrevConnId').val();
        break;
      case ipron.APIEvent.HELD: // held
      case ipron.APIEvent.RINGING: // ringing
        $('#TextPrevConnId').val($('#TextConnId').val());
        $('#TextConnId').val(data.connectionid);
        ctiPage.icConnId = data.connectionid; //e.conn_id;
        ctiPage.icPrevConnId = $('#TextPrevConnId').val();

      case ipron.APIEvent.ESTABLISHED: // establish
      case ipron.APIEvent.RELEASED: //released
        $('#TextOtherDn').val(data.otherdn);
        ctiPage.sTelType = '';
        ctiPage.consulState = '';
        break;
      case ipron.APIEvent.DIALING: // dialing
      case ipron.APIEvent.DIVERTED: // diverted
      case ipron.APIEvent.RETRIEVED: // retrieved
      case ipron.APIEvent.PARTYADDED: // party added
      case ipron.APIEvent.PARTYCHANGED: // party changed
        //호전환은 상담처리 한것으로 처리
        ctiPage.consulState = 'OPEN';
        break;
      case ipron.APIEvent.PARTYDELETED: // party delete
      case ipron.APIEvent.QUEUED: // queued
        //TextThisDn.value = data.thisdn;
        //TextUCID.value = data.ucid;
        //TextHop.value = data.hop;
        //TextConnId.value = data.connectionid;
        //TextCallId.value = data.callid;
        $('#TextThisDn').val(data.thisdn);
        $('#TextUCID').val(data.ucid);
        $('#TextHop').val(data.hop);
        $('#TextPrevConnId').val($('#TextConnId').val());
        $('#TextConnId').val(data.connectionid);
        $('#TextCallId').val(data.callid);
        ctiPage.icConnId = data.connectionid; //e.conn_id;
        ctiPage.icPrevConnId = $('#TextPrevConnId').val();

        break;
      case ipron.APIEvent.BANISHMENT: // banishment
        console.log('banishment');
        console.log(ctiPage.banishment);

        //if(ctiPage.banishment) {
        ctiPage.openModal('알림', '다른 곳에서 ' + '(' + data.destagentid + '/' + data.destdn + ')' + ' 연결했습니다. 강제 종료합니다. 다시 로그인 해주세요.');
        ctiPage.cti_agentLogout();
        ctiPage.chk_loginState('logout');
        ctiPage.banishment = false;
        //}
        break;
      default:
        break;
    }

    switch (data.method) {
      case ipron.APIEvent.RINGING:
        $('#b_AnswerCall').attr('class', 'btn-cti type3 outline-red');
        break;
      default:
        $('#b_AnswerCall').attr('class', 'btn-cti type3');
        break;
    }

    ctiFunc.AddEvent(log);
    ctiFunc.AddEventAllData(rtnLog);

    // 재접속 관련...
    switch (data.method) {
      case ipron.APIEvent.ACTIVE_TIMEOUT:
        ctiFunc.AddEvent('ACTIVE_TIMEOUT');
        ctiFunc.AddEvent('Retry OpenServer...');
        ctiFunc.bReconnect = true;
        ipron.OpenServer('EASD Test App', ctiFunc.CBFuncEvent, ctiFunc.CBFuncResponse);
        break;
      case ipron.WebEvent.ERR_DISCONNECT:
        ctiFunc.AddEvent('ERR_DISCONNECT');
        ctiFunc.AddEvent('Retry OpenServer...');
        ctiFunc.bReconnect = true;
        ipron.OpenServer('EASD Test App', ctiFunc.CBFuncEvent, ctiFunc.CBFuncResponse);
        break;
      case ipron.WebEvent.ERR_OPENSERVER:
        ctiFunc.AddEvent('ERR_OPENSERVER');
        if (ctiFunc.bReconnect) {
          ctiFunc.AddEvent('Retry OpenServer...');
          ctiFunc.setTimeout("ipron.OpenServer('EASD Test App', ctiFunc.CBFuncEvent, ctiFunc.CBFuncResponse)", 5000);
          break;
        }
    }

    if (data.extensionhandle > 0) {
      ctiFunc.AddEvent(ctiFunc.ExtensionData(data));
      $('#TextExHandle').val(data.extensionhandle);
    }
  };

  ctiFunc.AddEvent = function (data) {
    g_returnMSG = data;
    var strTime;
    var now = new Date();
    strTime =
      '[' +
      ctiFunc.leadingSpaces(now.getHours(), 2) +
      ':' +
      ctiFunc.leadingSpaces(now.getMinutes(), 2) +
      ':' +
      ctiFunc.leadingSpaces(now.getSeconds(), 2) +
      '.' +
      ctiFunc.leadingSpaces(now.getMilliseconds(), 3) +
      '] | ';

    var evt = $('#returnEVT').val();
    evt += strTime + g_returnMSG + '\n';
    evt += '==============================================\n';
    $('#returnEVT').val(evt);
  };

  ctiFunc.AddEventAllData = function (data) {
    g_returnMSG = data;
    var strTime;
    var now = new Date();
    strTime =
      '[' +
      ctiFunc.leadingSpaces(now.getHours(), 2) +
      ':' +
      ctiFunc.leadingSpaces(now.getMinutes(), 2) +
      ':' +
      ctiFunc.leadingSpaces(now.getSeconds(), 2) +
      '.' +
      ctiFunc.leadingSpaces(now.getMilliseconds(), 3) +
      '] | ';

    var evt = $('#returnEVT_RES').val();
    evt += strTime + g_returnMSG + '\n';
    evt += '==[AddEventAllData]============================================\n';
    $('#returnEVT_RES').val(evt);
  };

  ctiFunc.ClearDisplayInfo = function () {
    //$('#g_RecordCount').val('');
    $('#g_transferdn').val('');
    $('#g_destdn').val('');
    $('#g_usernm').val('');
    //$('#TextConnId').val('');
    //$('#TextPrevConnId').val('');

    $('#consul_callerTelNo').val('');
    $('#consul_custNm').val('');
    $('#consul_custNo').val('');
    $('#consul_email').val('');
    $('#consul_custId').val('');
    $('#consul_custTelNo').val('');
    $('#consul_bookingCode').val('');
    $('#consul_content').val('');

    $('#consul_dept').val(ctiPage.g_Part).prop("selected","selected");
    $("#consul_category").val('').prop("selected", true);
    $("#consul_inquiryType").val('4').prop("selected", true);

  };

  ctiFunc.AddResponse = function (data) {
    g_returnMSG = data;
    var strTime;
    var now = new Date();
    strTime =
      '[' +
      ctiFunc.leadingSpaces(now.getHours(), 2) +
      ':' +
      ctiFunc.leadingSpaces(now.getMinutes(), 2) +
      ':' +
      ctiFunc.leadingSpaces(now.getSeconds(), 2) +
      '.' +
      ctiFunc.leadingSpaces(now.getMilliseconds(), 3) +
      '] | ';

    var evt = $('#returnRES').val();
    evt += strTime + g_returnMSG + '\n';
    $('#returnRES').val(evt);
  };

  ctiFunc.AddpushEvent = function (data) {
    var strTime;
    var now = new Date();
    strTime =
      '[' +
      ctiFunc.leadingSpaces(now.getHours(), 2) +
      ':' +
      ctiFunc.leadingSpaces(now.getMinutes(), 2) +
      ':' +
      ctiFunc.leadingSpaces(now.getSeconds(), 2) +
      '.' +
      ctiFunc.leadingSpaces(now.getMilliseconds(), 3) +
      '] | ';

    var evt = $('#pushEVT').val();
    evt += strTime + data + '\n';
    evt += '==============================================\n';
    $('#pushEVT').val(evt);
  };

  ctiFunc.AddpushEvent_RES = function (data) {
    var strTime;
    var now = new Date();
    strTime =
      '[' +
      ctiFunc.leadingSpaces(now.getHours(), 2) +
      ':' +
      ctiFunc.leadingSpaces(now.getMinutes(), 2) +
      ':' +
      ctiFunc.leadingSpaces(now.getSeconds(), 2) +
      '.' +
      ctiFunc.leadingSpaces(now.getMilliseconds(), 3) +
      '] | ';

    var evt = $('#pushEVT_RES').val();
    evt += strTime + data + '\n';
    evt += '==============================================\n';
    $('#pushEVT_RES').val(evt);
  };

  ctiFunc.sleep = function (num) {
    //[1/1000초]
    var now = new Date();
    var stop = now.getTime() + num;
    while (true) {
      now = new Date();
      if (now.getTime() > stop) return;
    }
  };

  ctiFunc.CBFuncResponse = function (data) {
    var log = '';
    var result = 0;
    //alert('CBFuncResponse:'+data.messagetype + '/' + +data.method);
    switch (data.messagetype) {
      case ipron.MsgType.AjaxResponse:
        log += data.method + ' (AJAX Response) result[' + data.result + ']';
        if (data.method == ipron.Request.OpenServer) {
          if (data.result == ipron.JSONValue.True) {
            ctiFunc.TextSessionKey = data.key;
            ctiFunc.bReconnect = false;
            log += ' Handle[' + data.handle + ']';
            // pageChange(1);
            log += '\n==============================================';
          } else {
            log += ' Result[' + subscribePage.MakeOpenServerResult(data.handle) + ']';
            if (ctiFunc.bReconnect) {
              ctiFunc.AddEvent('OpenServerTry Fail...');
              ctiFunc.AddEvent('Retry OpenServer...');
              ctiFunc.setTimeout('ipron.OpenServer("EASD Test App", ctiFunc.CBFuncEvent, ctiFunc.CBFuncResponse)', 3000);
              break;
            }
          }
        }

        break;
      case ipron.MsgType.ICResponse:
        log += '[' + data.method + ']';
        switch (data.method) {
          case ipron.APIMethod.REGIADDR_RES: // register
            log += ' RegisterRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //Register 성공시 버튼 컨트롤
            if (data.result == 0) {
              // pageChange(2);
            } else if (data.result == 2001) {
              //alert("REGISTER 해제를 해주세요!!!!");
              // pageChange(1);
            }
            log += '\n==============================================';
            //                            RegiResCnt++;
            //                            TextRegiResCnt.value = "" + RegiResCnt;
            break;
          case ipron.APIMethod.UNREGIADDR_RES: // unregister
            log += ' UnregisterRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //Unregister 성공시 버튼 컨트롤
            if (data.result == 0) {
              // pageChange(0);
            }
            log += '\n==============================================';
            //                            UnRegiResCnt++;
            //                            TextUnRegiResCnt.value = "" + UnRegiResCnt;
            break;
          case ipron.APIMethod.GROUP_REGIADDR_RES: // groupregister
            log += ' GroupRegisterRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            break;
          case ipron.APIMethod.GROUP_UNREGIADDR_RES: // groupunregister
            log += ' GroupUnregisterRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            break;
          case ipron.APIMethod.MAKECALL_RES: // make call
            log += ' MakeCallRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.ANSWERCALL_RES: // Answer Call
            log += ' AnswerCallRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.CLEARCALL_RES: // clear call
            log += ' ClearCallRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.HOLDCALL_RES: // hold call
            log += ' HoldCallRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.RETRIEVECALL_RES: // retrieve call
            log += ' RetrieveCallRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.JOINCALL_RES: // join call
            log += ' JoinCallRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GRPICKUP_RES: // group pickup
            log += ' GroupPickupRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.QUEUE_PICKUP_RES: // queue pickup
            log += ' QueuePickupRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SINGLESTEP_TRANSFER_RES: // singlestep transfer
            log += ' SinglestepTransferRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.MUTE_TRANSFER_RES: // mute transfer
            log += ' MuteTransferRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SINGLESTEP_CONFERENCE_RES: // singlestep conference
            log += ' SinglestepConferenceRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.CONFERENCE_RES: // mute conference call
            log += ' MuteConferenceRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.DEFLECTCALL_RES: // deflect call
            log += ' DeflectCallRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.MCS_REROUTE_RES: // mcs reroute
            log += ' McsRerouteRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GETCONNECTION_RES: // get connection
            log += ' GetConnectionRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += ' ConnectionId1[' + data.connectionid1 + ']';
            log += ' ConnectionId2[' + data.connectionid2 + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.AGENTLOGIN_RES: // agent login
            log += ' AgentLoginRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            if (data.result == 0) {
              ctiPage.swatAgentStatus('GetAgentInfo');
              //var result = confirm("CALL 기능으로 이동하시겠습니까???");
              //if(result){
              //	pageChange(3);
              //}
            }
            log += '\n==============================================';
            break;
          case ipron.APIMethod.AGENTLOGOUT_RES: // agent logout
            log += ' AgentLogoutRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            if (data.result == 0) {
              ctiPage.banishment = false;
              // var result = confirm('REGISTER 기능으로 이동하시겠습니까???');
              //if(result){
              //	pageChange(1);
              //}
            }
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GETSTATE_SUBCODE_RES: // get state sub code
            log += ' GetStateSubcodeRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            ctiFunc.GetStateSubCode(data.extensionhandle);
            break;
          case ipron.APIMethod.GETROUTEABLE_RES: // get routeable
            log += ' GetRouteableRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            if (data.result == 0) log += ' 통화 가능';
            else log += ' 통화 불가능';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.UPDATE_USERDATA_RES: // update userdata
            log += ' UpdateUserdataRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.DELETE_KEY_USERDATA_RES: // delete key userdata
            log += ' DeleteKeyUserdataRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.DELETE_ALL_USERDATA_RES: // delete all userdata
            log += ' DeleteAllUserdataRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SEND_USEREVENT_RES: // send user event
            log += ' SendUserEventRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GET_USERDATA_RES: // get userdata
            log += ' GetUserdataRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += ' Conn ID [' + data.connectionid + ']';
            log += ' ';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GETCONNSTATE_RES: // get conn state
            log += ' GetConnStateRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += ' Conn ID [' + data.connectionid + ']';
            log += ' State [' + ctiFunc.MakeICConnectionState(data.connectionstate) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SET_ANI_USERDATA_RES: // set ani userdata
            log += ' SetAniUserdataRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SET_UCID_USERDATA_RES: // set ucid userdata
            log += ' SetUcidUserdataRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SETAGENTSTATE_RES: // set agent state
            log += ' SetAgentStateRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += ' State [' + ctiFunc.MakeAgentStateString(data.agentstate) + ']';
            log += ' State Sub [' + data.agentstatesub + ']';
            log += '\n==============================================';

            if (data.agentstate == '40') {
              $('#g_agentState50').attr('class', 'btn-cti');
              $('#g_agentState40').attr('class', 'btn-cti active');
              $('#g_agentState60').attr('class', 'btn-cti');
              $('#g_agentStateSub0').attr('class', 'btn-cti');
              $('#g_agentStateSub1').attr('class', 'btn-cti');
              $('#g_agentStateSub2').attr('class', 'btn-cti');
              $('#g_agentStateSub3').attr('class', 'btn-cti');
              $('#g_agentStateSub4').attr('class', 'btn-cti');
            } else if (data.agentstate == '50') {
              $('#g_agentState50').attr('class', 'btn-cti active');
              $('#g_agentState40').attr('class', 'btn-cti');
              $('#g_agentState60').attr('class', 'btn-cti');
              $('#g_agentStateSub0').attr('class', 'btn-cti');
              $('#g_agentStateSub1').attr('class', 'btn-cti');
              $('#g_agentStateSub2').attr('class', 'btn-cti');
              $('#g_agentStateSub3').attr('class', 'btn-cti');
              $('#g_agentStateSub4').attr('class', 'btn-cti');
            } else if (data.agentstate == '60') {
              $('#g_agentState50').attr('class', 'btn-cti');
              $('#g_agentState40').attr('class', 'btn-cti');
              $('#g_agentState60').attr('class', 'btn-cti active');
              $('#g_agentStateSub0').attr('class', 'btn-cti');
              $('#g_agentStateSub1').attr('class', 'btn-cti');
              $('#g_agentStateSub2').attr('class', 'btn-cti');
              $('#g_agentStateSub3').attr('class', 'btn-cti');
              $('#g_agentStateSub4').attr('class', 'btn-cti');
            } else {
              $('#g_agentState50').attr('class', 'btn-cti');
              $('#g_agentState40').attr('class', 'btn-cti');
              $('#g_agentState60').attr('class', 'btn-cti');
              if (data.agentstatesub == '0') {
                $('#g_agentStateSub0').attr('class', 'btn-cti active');
                $('#g_agentStateSub1').attr('class', 'btn-cti');
                $('#g_agentStateSub2').attr('class', 'btn-cti');
                $('#g_agentStateSub3').attr('class', 'btn-cti');
                $('#g_agentStateSub4').attr('class', 'btn-cti');
              } else if (data.agentstatesub == '1') {
                $('#g_agentStateSub0').attr('class', 'btn-cti');
                $('#g_agentStateSub1').attr('class', 'btn-cti active');
                $('#g_agentStateSub2').attr('class', 'btn-cti');
                $('#g_agentStateSub3').attr('class', 'btn-cti');
                $('#g_agentStateSub4').attr('class', 'btn-cti');
              } else if (data.agentstatesub == '2') {
                $('#g_agentStateSub0').attr('class', 'btn-cti');
                $('#g_agentStateSub1').attr('class', 'btn-cti');
                $('#g_agentStateSub2').attr('class', 'btn-cti active');
                $('#g_agentStateSub3').attr('class', 'btn-cti');
                $('#g_agentStateSub4').attr('class', 'btn-cti');
              } else if (data.agentstatesub == '3') {
                $('#g_agentStateSub0').attr('class', 'btn-cti');
                $('#g_agentStateSub1').attr('class', 'btn-cti');
                $('#g_agentStateSub2').attr('class', 'btn-cti');
                $('#g_agentStateSub3').attr('class', 'btn-cti active');
                $('#g_agentStateSub4').attr('class', 'btn-cti');
              } else if (data.agentstatesub == '4') {
                $('#g_agentStateSub0').attr('class', 'btn-cti');
                $('#g_agentStateSub1').attr('class', 'btn-cti');
                $('#g_agentStateSub2').attr('class', 'btn-cti');
                $('#g_agentStateSub3').attr('class', 'btn-cti');
                $('#g_agentStateSub4').attr('class', 'btn-cti active');
              }
            }

            break;
          case ipron.APIMethod.GETAGENTSTATE_RES: // get agent state
            log += ' GetAgentStateRes. Result[' + ctiFunc.MakeResult(data.result) + ']\n';
            var arrMedia = data.mediaset.split('-');
            for (var i = 0; i < arrMedia.length; i++) {
              switch (arrMedia[i]) {
                case '0':
                  log += 'Voice State [' + ctiFunc.MakeAgentStateString(data.voipagentstate) + ']';
                  log += 'Voice State Sub [' + data.voipagentstatesub + ']\n';
                  break;
                case '10':
                  log += 'Chat State [' + ctiFunc.MakeAgentStateString(data.chatagentstate) + ']';
                  log += 'Chat State Sub [' + data.chatagentstatesub + ']\n';
                  break;
                case '20':
                  log += 'VVoice State [' + ctiFunc.MakeAgentStateString(data.vvoiceagentstate) + ']';
                  log += 'VVoice State Sub [' + data.vvoiceagentstatesub + ']\n';
                  break;
                case '30':
                  log += 'VChat State [' + ctiFunc.MakeAgentStateString(data.vchatagentstate) + ']';
                  log += 'VChat State Sub [' + data.vchatagentstatesub + ']\n';
                  break;
                case '40':
                  log += 'email State [' + ctiFunc.MakeAgentStateString(data.emailagentstate) + ']';
                  log += 'email State Sub [' + data.emailagentstatesub + ']\n';
                  break;
                case '50':
                  log += 'FAX State [' + ctiFunc.MakeAgentStateString(data.faxagentstate) + ']';
                  log += 'FAX State Sub [' + data.faxagentstatesub + ']\n';
                  break;
                case '61':
                  log += 'MVOIP State [' + ctiFunc.MakeAgentStateString(data.mvoipagentstate) + ']';
                  log += 'MVOIP State Sub [' + data.mvoipagentstatesub + ']\n';
                  break;
                case '80':
                  log += 'SMS State [' + ctiFunc.MakeAgentStateString(data.smsagentstate) + ']';
                  log += 'SMS State Sub [' + data.smsagentstatesub + ']\n';
                  break;
              }
            }
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SETAFTCALLSTATE_RES: // set aft state
            log += ' SetAftCallStateRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += ' State [' + ctiFunc.MakeAgentStateString(data.agentstate) + ']';
            log += ' State Sub [' + data.agentstatesub + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SETSKILL_ENABLE_RES: // set skill enable
            log += ' SetSkillEnableRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.FORCE_SETAGTSTATE_RES: // force set agent state
            log += ' ForceSetAgentStateRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += ' State [' + ctiFunc.MakeAgentStateString(data.agentstate) + ']';
            log += ' State Sub [' + data.agentstatesub + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GETGROUPLIST_RES: // get group list
            log += ' GetGroupListRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            ctiFunc.GroupList(data.extensionhandle);

            break;
          case ipron.APIMethod.GETQUEUELIST_RES: // get queue list
            log += ' GetQueueListRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            ctiFunc.QueueList(data.extensionhandle);
            ctiPage.cti_QueueReport();

            break;
          case ipron.APIMethod.GETAGENTLIST_RES: // get agent list
            log += ' GetAgentListRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //ReportPage.AgentList(data.extensionhandle);

            break;
          case ipron.APIMethod.GETAGENTINFO_RES: // get agent info
            log += ' GetAgentInfoRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //if (ReportPage != null) {
            var str = '';
            str += 'Tenant Name : ' + data.tenantname + '\n';
            str += '상태 : \n';
            str += 'Voice State [' + ctiFunc.MakeAgentStateString(data.voipagentstate) + '] ';
            str += 'Voice State Sub [' + data.voipagentstatesub + ']\n';
            str += 'Chat State [' + ctiFunc.MakeAgentStateString(data.chatagentstate) + '] ';
            str += 'Chat State Sub [' + data.chatagentstatesub + ']\n';
            str += 'VVoice State [' + ctiFunc.MakeAgentStateString(data.vvoiceagentstate) + '] ';
            str += 'VVoice State Sub [' + data.vvoiceagentstatesub + ']\n';
            str += 'VChat State [' + ctiFunc.MakeAgentStateString(data.vchatagentstate) + '] ';
            str += 'VChat State Sub [' + data.vchatagentstatesub + ']\n';
            str += 'email State [' + ctiFunc.MakeAgentStateString(data.emailagentstate) + '] ';
            str += 'email State Sub [' + data.emailagentstatesub + ']\n';
            str += 'FAX State [' + ctiFunc.MakeAgentStateString(data.faxagentstate) + '] ';
            str += 'FAX State Sub [' + data.faxagentstatesub + ']\n';
            str += 'MVOIP State [' + ctiFunc.MakeAgentStateString(data.mvoipagentstate) + '] ';
            str += 'MVOIP State Sub [' + data.mvoipagentstatesub + ']\n';
            str += 'SMS State [' + ctiFunc.MakeAgentStateString(data.smsagentstate) + '] ';
            str += 'SMS State Sub [' + data.smsagentstatesub + ']\n';
            str += '조회 대상 DN : ' + data.destdn + '\n';
            str += '조회 대상 ID : ' + data.destagentid + '\n';
            str += '이름 : ' + data.agentname + '\n';
            str += 'Agent Position : ' + data.agentposition + '\n';
            str += 'Agent Level : ' + data.agentlevel + '\n';
            // ReportPage.AddReportOutput(str);
            //}
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GETAGENTINFO_EX_RES: // get agent info Ex
            log += '/' + data.result + '/';
            log += ' GetAgentInfoExRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            var str = '';
            str += 'Tenant Name : ' + data.tenantname + '\n';
            str += '[' + data.method + ']' + '\n';
            str += '/' + data.result + '/' + '\n';
            str += ctiFunc.MakeResult(data.result) + '\n';
            str += '상태 : \n';
            str += 'Voice State [' + ctiFunc.MakeAgentStateString(data.voipagentstate) + '] ';
            str += 'Voice State Sub [' + data.voipagentstatesub + ']\n';
            str += 'Chat State [' + ctiFunc.MakeAgentStateString(data.chatagentstate) + '] ';
            str += 'Chat State Sub [' + data.chatagentstatesub + ']\n';
            str += 'VVoice State [' + ctiFunc.MakeAgentStateString(data.vvoiceagentstate) + '] ';
            str += 'VVoice State Sub [' + data.vvoiceagentstatesub + ']\n';
            str += 'VChat State [' + ctiFunc.MakeAgentStateString(data.vchatagentstate) + '] ';
            str += 'VChat State Sub [' + data.vchatagentstatesub + ']\n';
            str += 'email State [' + ctiFunc.MakeAgentStateString(data.emailagentstate) + '] ';
            str += 'email State Sub [' + data.emailagentstatesub + ']\n';
            str += 'FAX State [' + ctiFunc.MakeAgentStateString(data.faxagentstate) + '] ';
            str += 'FAX State Sub [' + data.faxagentstatesub + ']\n';
            str += 'MVOIP State [' + ctiFunc.MakeAgentStateString(data.mvoipagentstate) + '] ';
            str += 'MVOIP State Sub [' + data.mvoipagentstatesub + ']\n';
            str += 'SMS State [' + ctiFunc.MakeAgentStateString(data.smsagentstate) + '] ';
            str += 'SMS State Sub [' + data.smsagentstatesub + ']\n';
            str += '조회 대상 DN : ' + data.destdn + '\n';
            str += '조회 대상 ID : ' + data.destagentid + '\n';
            str += '이름 : ' + data.agentname + '\n';
            str += 'Agent Position : ' + data.agentposition + '\n';
            str += 'Agent Level : ' + data.agentlevel + '\n';
            str += 'Agent Alias : ' + data.agentalias + '\n';
            switch (data.agentpwdencryptkind) {
              case 1:
                str += 'Agent PwdEncryptType : SHA-1 \n';
                break;
              case 2:
                str += 'Agent PwdEncryptType : SHA-256 \n';
                break;
              case 5:
                str += 'Agent PwdEncryptType : SHA-512 \n';
                break;
            }
            str += 'Agent PwdChgDate : ' + data.agentpwdchgdate + '\n';
            subscribePage.ReportOutput(str);
            //}
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GETAGENT_SKILLLIST_RES: // get agent skill list
            log += ' GetAgentSkillListRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //ReportPage.AgentSkillList(data.extensionhandle);
            break;
          case ipron.APIMethod.GETAGENT_QUEUELIST_RES: // get agent queue list
            log += ' GetAgentQueueListRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //alert(log);
            //alert(data.extensionhandle);
            ctiFunc.AgentQueueList(data.extensionhandle);
            ctiPage.cti_QueueReport();
            //ReportPage.AgentQueueList(data.extensionhandle);
            break;
          case ipron.APIMethod.BSR_RES: // bsr
            log += ' BsrRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            // ReportPage.BsrList(data.thisdn, data.queuedn, data.destdn, data.nodeid, data.bsrvalue, data.bsrprefix);
            break;
          case ipron.APIMethod.GETQUEUETRAFFIC_RES: // get queue traffic
            log += ' GetQueueTrafficRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            subscribePage.QueueTraffic(
              data.svclvltime,
              data.svclevel,
              data.waitcount,
              data.allagentcount,
              data.loginagentcount,
              data.readyagentcount,
              data.inbusyagentcount,
              data.outbusyagentcount,
              data.aftworkagentcount,
              data.notreadyagentcount,
              data.ringingcount,
              data.inboundtotal,
              data.accepttotal,
              data.abandontotal,
              data.transbackup,
              data.answercountavr,
              data.talktimecountavr,
              data.waittime,
              data.maxwaittime,
              data.minwaittime,
              data.waittimeavr,
              data.waittimesum,
              data.distributewaitcount,
            );
            break;
          case ipron.APIMethod.GETQUEUEORDER_RES: // get queue order
            log += ' GetQueueOrderRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //subscribePage.GetQueueOrder(data.waitcount);
            break;
          case ipron.APIMethod.AGENT_REPORT_RES: // agent report
            log += ' AgentReportRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            subscribePage.AgentReport(
              data.intotal,
              data.insuccess,
              data.intalktime,
              data.outtotal,
              data.outsuccess,
              data.outtalktime,
              data.transfercalls,
              data.logintime,
              data.logouttime,
              data.inintsuc,
              data.inextsuc,
              data.inconsuc,
              data.outintsuc,
              data.outextsuc,
              data.outconsuc,
              data.ringingtime,
              data.dialingtime,
              data.readytime,
              data.notreadytime,
              data.acwtime,
            );
            break;
          case ipron.APIMethod.GROUP_REPORT_RES: // group report
            log += ' GroupReportRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //ReportPage.GroupReport(data);
            break;
          case ipron.APIMethod.QUEUE_REPORT_RES: // queue report
            log += ' QueueReportRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            ctiFunc.QueueReport(data);
            break;
          case ipron.APIMethod.TENANT_REPORT_RES: // tenant report
            log += ' TenantReportRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //ReportPage.TenantReport(data);
            break;
          case ipron.APIMethod.DNIS_REPORT_RES: // dnis report
            log += ' DnisReportRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            subscribePage.DnisReport(
              data.inboundtotal,
              data.abandontotal,
              data.agttry,
              data.agttryabandon,
              data.rejecttotal,
              data.accepttotal,
              data.nonsvctotal,
              data.ivrsvccount,
              data.waitcount,
              data.inbusyagentcount,
              data.ivragtconfcount,
            );
            break;
          case ipron.APIMethod.MEDIA_ATTACH_RES: // media attach
            log += ' MediaAttachtRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.MEDIA_DEATTACH_RES: // media detach
            log += ' MediaDetachRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.MEDIA_PLAY_RES: // media play
            log += ' MediaPlayRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.MEDIA_COLLECT_RES: // media collect
            log += ' MediaCollectRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.CREATE_VIRTUAL_MEDIA_RES: // create virtual media
            log += ' CreateVirtualMediaRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += ' Virtual Media ID [' + data.virtualmediaid + ']';
            log += ' UCID [' + data.ucid + ']';
            //FeaturePage.TextUCID.value = data.ucid;
            $('TextUCID').val(data.ucid);
            log += '\n==============================================';
            break;
          case ipron.APIMethod.DELETE_VIRTUAL_MEDIA_RES: // delete virtual media
            log += ' DeleteVirtualMediaRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.AGENT_SUBSCRIBE_RES: // agent subscribe
            log += ' AgentSubscribeRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GROUP_SUBSCRIBE_RES: // group subscribe
            log += ' GroupSubscribeRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.QUEUE_SUBSCRIBE_RES: // queue subscribe
            log += ' QueueSubscribeRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.TENANT_SUBSCRIBE_RES: // tenant subscribe
            log += ' TenantSubscribeRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.DNIS_SUBSCRIBE_RES: // dnis subscribe
            log += ' DnisSubscribeRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.CLOSE_SUBSCRIBE_RES: // close subscribe
            log += ' CloseSubscribeRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GETAGENTLIST_EX_RES: // get agent list ex
            log += ' AdGetAgentListRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //AdvanceListPage.SetList(data.method, data.advanceListHandle);
            break;
          case ipron.APIMethod.GETGROUPLIST_EX_RES: // get group list ex
            log += ' AdGetGroupListRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //AdvanceListPage.SetList(data.method, data.advanceListHandle);
            break;
          case ipron.APIMethod.GETQUEUELIST_EX_RES: // get queue list ex
            log += ' AdGetQueueListRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //AdvanceListPage.SetList(data.method, data.advanceListHandle);
            break;
          case ipron.APIMethod.GETAGENT_SKILLLIST_EX_RES: // get agent skill list ex
            log += ' AdGetAgentSkillListRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //AdvanceListPage.SetList(data.method, data.advanceListHandle);
            break;
          case ipron.APIMethod.GETAGENT_QUEUELIST_EX_RES: // get agent queue list ex
            log += ' AdGetAgentQueueListRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            //AdvanceListPage.SetList(data.method, data.advanceListHandle);
            break;
          case ipron.APIMethod.DTMF_PLAY_RES: // Dtmf Play
            log += ' DtmfPlayRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.VIRTUAL_QUEUE_RES:
            log += ' VirtualQueueRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SET_CALLBACK_RES:
            log += ' SetCallbackRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.MEDIA_DND_RES:
            log += ' MediaDndRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.RESERVED_AGENT_STATE_RES:
            log += ' ReservedAgentStateRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SEND_GLOBAL_EVENT_RES:
            log += ' SendGlobalEventRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.AGENTCALL_RES:
            log += ' AgentCallRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GET_MEDIA_ACTIVATE_RES:
            log += ' GetMediaRes. Result[' + ctiFunc.MakeResult(data.result) + ']' + '\n';
            log += ' Chat Activate : ' + data.chatactivate;
            log += ' VVoice Activate : ' + data.vvoiceactivate;
            log += ' VChat Activate : ' + data.vchatactivate;
            log += ' Email Activate : ' + data.emailactivate;
            log += ' Fax Activate : ' + data.faxactivate;
            log += ' Voip Activate : ' + data.voipactivate;
            log += ' MVoip Activate : ' + data.mvoipactivate;
            log += ' SMS Activate : ' + data.smsactivate;
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GETROUTEPOLICY_RES:
            log += 'GetRoutePolicy. Result[' + ctiFunc.MakeResult(data.result) + ']' + '\n';
            switch (data.routepolicy) {
              case 0:
                log += '정책적으로 호 분배가 가능하지 않음';
                break;
              case 1:
                log += '정책적으로 호 분배가 가능하고 현재 즉시 수신 가능한 상태';
                break;
              case 2:
                log += '정책적으로 호 분배가 가능하지만 현재는 수신 할 수 없는 상태';
                break;
            }
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SET_MEDIAREADY_STATE_RES:
            log += ' SetMediaReadyStateRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GET_MEDIAREADY_STATE_RES:
            log += ' GetMediaReadyStateRes. Result[' + ctiFunc.MakeResult(data.result) + '] AgentID[' + data.agentid + '] MediaType[' + data.mediatype + '] MediaReady [' + data.mediaready + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GET_USER_CDR_RES:
            log += ' GetUserCdrRes. Result[' + ctiFunc.MakeResult(data.result) + '] Conn ID[' + data.connectionid + '] UserCdr[' + data.usercdr + '] PrivateData[' + data.privatedata + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SET_USER_CDR_RES:
            log += ' GetUserCdrRes. Result[' + ctiFunc.MakeResult(data.result) + '] Conn ID[' + data.connectionid + '] UserCdr[' + data.usercdr + '] PrivateData[' + data.privatedata + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.SET_MUTE_ENABLE_RES:
            log += ' SetDeviceMuteEnableRes. Result[' + ctiFunc.MakeResult(data.result) + '] This DN [' + data.thisdn + '] Conn ID[' + data.connectionid + '] PrivateData[' + data.privatedata;
            log += '] Media Type [' + data.mediatype + '] Enable [' + data.enable + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.RESERVE_IR_ATTR_RES:
            log += ' ReserveIrAttrRes. Result[' + ctiFunc.MakeResult(data.result) + '] Ani[' + data.aninumber + '] PrivateData[' + data.privatedata;
            log += '] Media Type [' + data.mediatype + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.FIND_WAIT_IR_RES:
            log += ' FindWaitIrRes. Result[' + ctiFunc.MakeResult(data.result) + '] Ani [' + data.aninumber + '] PrivateData[' + data.privatedata + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GETCONNECTION_EX_RES:
            log += ' GetConnectionExRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
          case ipron.APIMethod.GETCALL_INFO_RES:
            log += ' GetCallInfoRes. Result[' + ctiFunc.MakeResult(data.result) + ']';
            log += '\n==============================================';
            break;
        }
        break;
      default:
        break;
    }
    ctiFunc.afterLogic(log, data.result);
    ctiFunc.AddResponse(log);
    if (data.extensionhandle > 0) ctiFunc.AddResponse(ctiFunc.ExtensionData(data));
  };

  //통신 후 처리 (CBFuncResponse 처리)
  ctiFunc.afterLogic = function (data, result) {
    //ctiPage.chk_agentState('40',true)  대기
    //ctiPage.chk_agentState('00',true) 상담중
    //ctiPage.chk_agentState('60',true) 후처리
    //ctiPage.chk_agentStateSub('0')"   이석
    //ctiPage.chk_agentStateSub('1')"   식사
    //ctiPage.chk_agentStateSub('2')"   교육
    //ctiPage.chk_agentStateSub('3')"   작업
    //ctiPage.chk_agentStateSub('4')"   접견

    if (data.includes('clearcall')) {
      if (ctiPage.consulState == '') {
        ctiPage.swatSaveCti('swatSaveCti', '');
      } else {
        ctiPage.consulState = '';
      }
      ctiPage.sTelType = '';
      //ctiFunc.ClearDisplayInfo();
      ctiPage.swatVeloce('swatVeloce');
      //ctiPage.cti_SetAFTCallState('40');
      //ctiPage.chk_agentState('40', true);
      ctiPage.cti_GetAgentState();
    }

    if (data.includes('makecall')) {
      ctiPage.chk_agentState('00', true);
    }

    if (data.includes('answercall')) {
      ctiPage.chk_agentState('00', true);
    }

    if (data.includes('openserver')) {
      //상담원 정보 가져오기 (로그인)
      ctiPage.GetAgentInfoEx_Login();
      //ctiPage.GetAgentInfo();
      //client.GetAgentInfoEx_Transferdn();
      //ctiPage.cti_register();
    }

    //로그인,내선번호 연결은 상담사의 상태를 확인한다.
    //GETAGENTINFO_EX_RES: [1167] /
    //[1167]/2105/

    if (data.includes('[1167]')) {
      if (ctiPage.actionName == 'agentLogin' && data.includes('/2105/')) {
        //result == "true"
        ctiPage.cti_register();
      } else if (ctiPage.actionName == 'agentLogin') {
        ctiPage.cti_register();
        //ctiPage.openModal('알림', '해당 아이디로 이미 사용중 입니다.'+ result);
        //client.CloseServer();
      }
      //else if (ctiPage.actionName == "MakeCallDn") {
      //  ctiPage.cti_MakeCallDn();
      //  ctiPage.chk_agentState('00', false);
      //}
      //else if (ctiPage.actionName == "MakeCallDn" && data.includes('/0/')) {
      //  ctiPage.cti_MakeCallDn();
      //  ctiPage.chk_agentState('00', false);
      //}
      //else if (ctiPage.actionName == "MakeCallDn" ) {
      //  ctiPage.openModal('알림', '상담사에게 연결할 수 없습니다.' + result);
      //}
      //else if (ctiPage.actionName == "SinglestepTransfer") {
      //  ctiPage.swatAgentStatus('SinglestepTransfer');
      //}
      //else if (ctiPage.actionName == "SinglestepTransfer" && data.includes('/0/')) {
      //  ctiPage.swatAgentStatus('SinglestepTransfer');
      //}
      //else if (ctiPage.actionName == "SinglestepTransfer") {
      //  ctiPage.openModal('알림', '상담사에게 연결할 수 없습니다.' + result);
      //  }
      else {
        ctiPage.openModal('알림', '상담사에게 연결할 수 없습니다.' + result);
      }
    }
    if (data.includes('getagentinfo')) {
    }

    if (data.includes('register')) {
      ctiPage.cti_agentLogin();
    }

    if (data.includes('unregister')) {
      ctiPage.cti_closeServer();
    }

    if (data.includes('agentlogout')) {
      ctiPage.cti_unRegister();
    }

    if (data.includes('setagentstate')) {
      //ctiFunc.ClearDisplayInfo();
      ctiPage.cti_GetAgentState();
      //ctiPage.cti_SetAFTCallState('');
    }

    if (data.includes('getagentstate')) {
      ctiPage.cti_GetQueueList();
    }

    //호전환 후 후처리
    if (data.includes('singlesteptransfer')) {
      //ctiPage.chk_agentState('60', true)
      //ctiPage.cti_SetAFTCallState('60');
    }

    if (data.includes('mutetransfer')) {
      //ctiPage.chk_agentState('60', true)
      //ctiPage.cti_SetAFTCallState('60');
      ctiPage.swatSaveCti('swatSaveCti', 'mutetransfer');
    }

    if (data.includes('agentlogin')) {
      if (ipron.IsConnected()) {
        ctiFunc.bReconnect = true;
        ctiPage.chk_loginState('login');
        $('#g_agentState').val('40');
        ctiPage.cti_SetAgentState();
        //ctiPage.swatCallback('swatCallback');
        ctiPage.swatAgentList('swatAgentList', 'agentlogin'); //로그인시 호출 알림
      }
    }

    if (data.includes('closeserver')) {
      if (!ipron.IsConnected()) {
        ctiFunc.bReconnect = false;
        ctiPage.chk_loginState('logout');
        ctiFunc.ClearDisplayInfo();
        ctiPage.g_chkValue = 'agentLogout';
      }
    }
  };

  /*return Code*/
  ctiFunc.MakeResult = function (result) {
    var str;
    switch (result) {
      case 0:
        str = '성공';
        break;
      case 1001:
        str = '이미 사용중';
        break;
      case 1002:
        str = '발견하지 못함';
        break;
      case 1003:
        str = '라이센스 초과';
        break;
      case 1004:
        str = '여유공간 초과';
        break;
      case 1005:
        str = '유효하지 않은 상태';
        break;
      case 1006:
        str = '이미 처리중';
        break;
      case 1007:
        str = '이미 할당됨';
        break;
      case 1008:
        str = '부정확한 정보';
        break;
      case 2000:
        str = 'IC Server와 Version 정보가 일치 하지 않습니다';
        break;
      case 2001:
        str = '사용중인 Device';
        break;
      case 2002:
        str = '사용중인 사용자';
        break;
      case 2003:
        str = '비 수신대기인 사용자';
        break;
      case 2004:
        str = '통화중인 Device';
        break;
      case 2101:
        str = 'Device  찾을 수 없음';
        break;
      case 2102:
        str = 'App ID 찾을 수 없음';
        break;
      case 2103:
        str = 'Tenant 찾을 수 없음';
        break;
      case 2104:
        str = 'Mornitor ID 찾을 수 없음';
        break;
      case 2105:
        str = '사용자 찾을 수 없음';
        break;
      case 2106:
        str = 'Group 찾을 수 없음';
        break;
      case 2107:
        str = 'Queue 찾을 수 없음';
        break;
      case 2108:
        str = 'Skill 찾을 수 없음';
        break;
      case 2109:
        str = '사유코드 찾을 수 없음';
        break;
      case 2110:
        str = 'Connection 찾을 수 없음';
        break;
      case 2111:
        str = 'Call 찾을 수 없음';
        break;
      case 2112:
        str = 'DNIS 찾을 수 없음';
        break;
      case 2112:
        str = 'UCID 찾을 수 없음';
        break;
      case 2112:
        str = 'Media ID 찾을 수 없음';
        break;
      case 2201:
        str = '시스템 라이선스 Full';
        break;
      case 2202:
        str = 'Tenant 라이선스 Full';
        break;
      case 2203:
        str = 'Connection 개수 Full';
        break;
      case 2301:
        str = 'Device 개수 초과';
        break;
      case 2302:
        str = 'UserData 허용 크기 초과';
        break;
      case 2303:
        str = 'Virtual Media 허용 크기 초과';
        break;
      case 2304:
        str = 'UserCdr 허용 크기 초과';
        break;
      case 2401:
        str = '유효하지 않는 App ID';
        break;
      case 2402:
        str = '유효하지 않는 사용자 상태';
        break;
      case 2403:
        str = '유효하지 않는 Device 상태';
        break;
      case 2404:
        str = '유효하지 않는 사유 코드';
        break;
      case 2405:
        str = '유효하지 않는 Connection';
        break;
      case 2406:
        str = '유효하지 않는 UCID';
        break;
      case 2407:
        str = '유효하지 않는 Option';
        break;
      case 2501:
        str = '올바르지 않은 범위';
        break;
      case 2502:
        str = '올바르지 않은 패스워드';
        break;
      case 2503:
        str = '올바르지 않은 Device';
        break;
      case 2504:
        str = '올바르지 않은 사용자';
        break;
      case 2505:
        str = '올바르지 않은 상태코드';
        break;
      case 2506:
        str = '올바르지 않은 Call	';
        break;
      case 2601:
        str = '지원하지 않는 Media Type';
        break;
      case 2701:
        str = 'MCS Unknown Consult 실패';
        break;
      case 2702:
        str = 'MCS Busy Consult 실패';
        break;
      case 2703:
        str = 'MCS NoAnswer Consult 실패';
        break;
      case 2704:
        str = 'MCS Select Consult 실패';
        break;
      case 2705:
        str = 'MCS UserAbort Consult 실패';
        break;
      case 2706:
        str = 'MCS Reconnect 실패';
        break;
      case 2707:
        str = 'MCS Transfer 실패';
        break;
      case 2708:
        str = 'MCS Unknown SGTransfer 실패';
        break;
      case 2709:
        str = 'MCS Busy SGTransfer 실패';
        break;
      case 2710:
        str = 'MCS NoAnswer SGTransfer 실패';
        break;
      case 2711:
        str = 'MCS Select SGTransfer 실패';
        break;
      case 2712:
        str = 'MCS UserAbort SGTransfer 실패';
        break;
      case 2713:
        str = 'MCS Unknown Reroute 실패';
        break;
      case 2714:
        str = 'MCS Busy Reroute 실패';
        break;
      case 2715:
        str = 'MCS NoAnswer Reroute 실패';
        break;
      case 2716:
        str = 'MCS Select Reroute 실패';
        break;
      case 2717:
        str = 'MCS UserAbort Reroute 실패';
        break;
      case -1:
        str = 'Register 된 DN를 찾지 못하였습니다';
        break;
      case -2:
        str = 'Socket 연결이 끊겼습니다';
        break;
      case -3:
        str = 'Out형 변수의 값이 NULL 입니다';
        break;
      case -4:
        str = 'DN 값이 잘못된 형식입니다.(DN 은 0~9, *, # 문자만 가능합니다';
        break;
      case -5:
        str = 'Password 암호화 실패';
        break;
      case -6:
        str = '소켓 에러';
        break;
      case -7:
        str = '데이터 전송 실패';
        break;
      case -8:
        str = 'Event 대기 실패';
        break;
      case -9:
        str = 'Response 실패';
        break;
      case -10:
        str = 'Thread 생성 실패';
        break;
      case -11:
        str = '이미 연결 되어 있음';
        break;
      case -12:
        str = '핸들값 에러';
        break;
      case -13:
        str = 'Extension Data 처리 오류';
        break;
      case -14:
        str = '데이터 전송 실패';
        break;
      case -15:
        str = 'Thread Stop 실패';
        break;
      case -16:
        str = '대기 시간 초과';
        break;
      case -17:
        str = 'Memory 할당 실패';
        break;
      case -18:
        str = '보내려는 패킷크기가 너무 큽니다';
        break;
      case -19:
        str = '재접속 시도중입니다';
        break;
      case -20:
        str = 'OpenServer 최대 개수 초과';
        break;
      case -21:
        str = '입력값 중에 NULL값 또는 잘못된 데이터가 있습니다';
        break;
      case -22:
        str = '이미 연결되어 있는 Socket 의 IP와 지금 연결 하려는 IP 정보가 다릅니다';
        break;
      case -23:
        str = 'OCX의 Event 를 전달 받을 HWND 핸들이 없습니다';
        break;
      case -24:
        str = 'IC Server 와 Interface Version 이 다릅니다';
        break;
      default:
        str = '알수 없는 에러 코드 : [' + result.toString() + ']';
        break;
    }

    return str;
  };

  ctiFunc.leadingSpaces = function (n, digits) {
    var space = '';
    n = n.toString();

    if (n.length < digits) {
      for (var i = 0; i < digits - n.length; i++) space += '0';
    }
    return space + n;
  };

  ctiFunc.GetStateSubCode = function (extension) {
    // Extension 활용
    var i = 0,
      j = 0;
    var nRecord = 0,
      nField = 0;
    var strKey, strValue;
    var str = '';

    if (extension <= 0) {
      ctiFunc.AddResponse('해당 상태에 대한 Sub Code가 없습니다');
    }
    nRecord = ipron.EXTGetRecordCount(extension);
    for (i = 0; i < nRecord; i++) {
      nField = ipron.EXTGetValueCountForRecord(extension, i);
      strKey = ipron.EXTGetKey(extension, i);
      for (j = 0; j < nField; j++) {
        strValue = ipron.EXTGetValueForRecord(extension, i, j);
      }
      $('#g_agentStateSub').append('<option value="' + strKey + '">' + strValue + '</option>');
    }
  };

  ctiFunc.ExtensionData = function (data) {
    var extlog = '[' + data.method + ']';
    var ex = '';

    ex = ipron.GetExtensionData(data.extensionhandle);
    extlog += ' Extension Data [' + ex + ']';
    extlog += '\n==============================================';

    if (data.method == ipron.APIEvent.RINGING) {
      ctiPage.Ringing(ex);
    }
    if (data.method == ipron.APIEvent.RELEASED) {
      ctiPage.RELEASED(ex);
    }
    return extlog;
  };

  ctiFunc.MakeAgentStateString = function (state) {
    var str;

    switch (state) {
      case 0:
        str = 'NULL';
        break;
      case 10:
        str = 'Logout';
        break;
      case 20:
        str = 'Login';
        break;
      case 30:
        str = 'Not Ready';
        break;
      case 40:
        str = 'Ready';
        break;
      case 41:
        str = 'InReady';
        break;
      case 42:
        str = 'OutReady';
        break;
      case 50:
        str = 'Busy';
        break;
      case 60:
        str = 'Work After Call';
        break;
      default:
        str = 'Unknown State : ' + (typeof state == 'undefined') ? 'undefined' : state.toString();
        break;
    }
    return str;
  };

  ctiFunc.AgentQueueList = function (handle) {
    var i = 0,
      j = 0;
    var nRecord = 0;
    nField = 0;
    var strKey, strValue;
    var str = '';
    var tot_str = '';
    var queStr = '';

    nRecord = ipron.EXTGetRecordCount(handle);

    for (i = 0; i < nRecord; i++) {
      nField = ipron.EXTGetValueCountForRecord(handle, i);

      strKey = ipron.EXTGetKey(handle, i);

      str = 'Queue ID : ' + strKey + ' | ';

      for (j = 0; j < nField; j++) {
        strValue = ipron.EXTGetValueForRecord(handle, i, j);
        switch (j) {
          case 0:
            str += 'Name : ' + strValue + ' | ';
            break;
          case 1:
            str += 'DN : ' + strValue + ' | ';
            queStr += nRecord == i + 1 ? strValue : strValue + '-';
            break;
          case 2:
            str += 'SkillID : ' + strValue;
            break;
          default:
            str += ' | Unknown Data : ' + strValue;
            break;
        }
      }
      tot_str += str + '\n';
      $('#g_queuelist').val(queStr);
    }
    ctiFunc.AddpushEvent_RES(str);
  };

  ctiFunc.QueueList = function (handle) {
    var i = 0,
      j = 0;
    var nRecord = 0;
    nField = 0;
    var strKey, strValue;
    var str = '';
    var tot_str = '';
    var queStr = '';

    nRecord = ipron.EXTGetRecordCount(handle);

    tot_str = '(' + nRecord + ')';

    for (i = 0; i < nRecord; i++) {
      nField = ipron.EXTGetValueCountForRecord(handle, i);

      strKey = ipron.EXTGetKey(handle, i);

      str = 'Queue ID : ' + strKey + ' | ';

      for (j = 0; j < nField; j++) {
        strValue = ipron.EXTGetValueForRecord(handle, i, j);
        switch (j) {
          case 0:
            str += 'DN : ' + strValue + ' | ';
            queStr += nRecord == i + 1 ? strValue : strValue + '-';
            break;
          case 1:
            str += 'Name : ' + strValue;
            break;
          default:
            str += ' | Unknown Data : ' + strValue;
            break;
        }
      }

      tot_str += str + '\n';
      $('#g_queuelist').val(queStr);
    }
    ctiFunc.AddpushEvent_RES(tot_str);
  };

  ctiFunc.QueueReport = function (data) {
    var msg = '';
    var szExt = '';

    msg += 'Queue Report \n';
    msg += '대기호 : ' + data.waitcount + '\n';
    msg += '현재 대기호 최대 대기 시간 : ' + data.maxwaittime + '\n';
    msg += '현재 대기호 대기시간 합계 : ' + data.waittimesum + '\n';
    msg += '인입호 : ' + data.inboundtotal + '\n';
    msg += '응답호 : ' + data.accepttotal + '\n';
    msg += 'Non-Service 처리호 : ' + data.nonsvctotal + '\n';
    msg += '서비스 레벨 이내 응답호 : ' + data.svcaccepttotal + '\n';
    msg += '서비스 레벨 이내 포기호 : ' + data.svcabandontotal + '\n';
    msg += '포기호 : ' + data.abandontotal + '\n';
    msg += '거부호 : ' + data.rejecttotal + '\n';
    msg += '응답률 : ' + data.acceptratio + '\n';
    msg += '내선 아웃바운드 통화 시도 수 : ' + data.outinttot + '\n';
    msg += '내선 아웃바운드 성공 통화 수 : ' + data.outintsuc + '\n';
    msg += '국선 아웃바운드 통화 시도 수 : ' + data.outexttot + '\n';
    msg += '국선 아웃바운드 성공 통화 수 : ' + data.outextsuc + '\n';
    msg += '응답호 총 통화시간 : ' + data.accepttalktimesum + '\n';
    msg += '서비스 레벨 타임 : ' + data.svclvltime + '\n';
    msg += '서비스 레벨 : ' + data.svclevel + '\n';
    msg += '전체 상담원 수 : ' + data.allagentcount + '\n';
    msg += '로그인 상담원 수 : ' + data.loginagentcount + '\n';
    msg += '수신대기 상담원 수 : ' + data.readyagentcount + '\n';
    msg += '벨울림 상담원 수 : ' + data.ringingcount + '\n';
    msg += '다이얼링 상담원 수 : ' + data.dialingcount + '\n';
    msg += '내선 인바운드 통화 중 상담원 수 : ' + data.ibintbusyagt + '\n';
    msg += '국선 인바운드 통화 중 상담원 수 : ' + data.ibextbusyagt + '\n';
    msg += '내선 아웃바운드 통화 중 상담원 수 : ' + data.obintbusyagt + '\n';
    msg += '국선 아웃바운드 통화 중 상담원 수 : ' + data.obextbusyagt + '\n';
    msg += '후처리 상담원 수 : ' + data.aftworkagentcount + '\n';
    msg += '자리비움 상담원 수 : ' + data.notreadyagentcount + '\n';

    $('#g_RecordCount').val(data.waitcount);

    ctiFunc.AddpushEvent_RES(msg);
  };

  ctiFunc.GroupList = function (handle) {
    var i = 0,
      j = 0;
    var nRecord = 0;
    nField = 0;
    var strKey, strValue;
    var str = '';
    var tot_str = '';

    var queStr = '';
    nRecord = ipron.EXTGetRecordCount(handle);

    for (i = 0; i < nRecord; i++) {
      nField = ipron.EXTGetValueCountForRecord(handle, i);
      strKey = ipron.EXTGetKey(handle, i);
      str = 'Group ID : ' + strKey + ' | ';
      queStr += nRecord == i + 1 ? strKey : strKey + '-';
      for (j = 0; j < nField; j++) {
        strValue = ipron.EXTGetValueForRecord(handle, i, j);

        if (j == 0) {
          str += 'Name : ' + strValue;
        } else {
          str += ' | Unknown Data : ' + strValue;
        }
      }

      tot_str += str + '\n';
    }
    ctiFunc.AddpushEvent_RES(tot_str);
    $('#g_grouplist').val(queStr);
  };
})((window.ctiFunc = {}));

(function (ctiutil) {
  ctiutil.basicCodes = {
    //I:예약문의, J:변경/취소문의, K:결제문의, L:여행문의, M:칭찬, N:불만, O:특이이슈, P:기타, H:방문상담)"
    //1 K01: 결제문의
    //2 J01: 변경문의 ,
    //3 J03  취소/환불문의
    // :     예약문의
    //4 P03 :기타문의
    ctiBasicCode: {
      1: [
        {
          pcode: 'K',
          code: 'K03',
          name: '결제변경/취소'
        }
      ],
      2: [
        {
          pcode: 'J',
          code: 'J01',
          name: '상품변경'
        }
      ],
      3: [
        {
          pcode: 'J',
          code: 'J03',
          name: '변경/취소문의'
        }
      ],
      4: [
        {
          pcode: 'P',
          code: 'P03',
          name: '기타'
        }
      ]
    }
  };

  ctiutil.itemName = function (itemType) {
    var itemName = "-";
    if(itemType ==1 ) {
      itemName = ctiutil.blankTab() + "해외항공" +  ctiutil.blankTab();
    }
    else if(itemType ==2 ) {
      itemName = ctiutil.blankTab() + "국내항공" +  ctiutil.blankTab();
    }
    else if(itemType ==3 ) {
      itemName = ctiutil.blankTab() + "호텔"+  ctiutil.blankTab();
    }
    else if(itemType ==4 ) {
      itemName = ctiutil.blankTab() + "투어&액티비티&렌터카"+  ctiutil.blankTab();
    }
    return itemName;
  };

  ctiutil.itemNameSearch = function (itemType) {
    var itemName = "-";
    if(itemType ==1 ) {
      itemName = ctiutil.blankTab() + "6001해외항공" +  ctiutil.blankTab();
    }
    else if(itemType ==2 ) {
      itemName = ctiutil.blankTab() + "6002국내항공" +  ctiutil.blankTab();
    }
    else if(itemType ==3 ) {
      itemName = ctiutil.blankTab() + "6003호텔"+  ctiutil.blankTab();
    }
    else if(itemType ==4 ) {
      itemName = ctiutil.blankTab() + "6004투어&액티비티&렌터카"+  ctiutil.blankTab();
    }
    return itemName;
  };

  ctiutil.categoryName = function (categoryCode) {
    var categoryName = "-";

    if(categoryCode =="6001" ) {
      categoryName = ctiutil.blankTab() + "해외항공" +  ctiutil.blankTab();
    }
    else if(categoryCode =="6002" ) {
      categoryName = ctiutil.blankTab() + "국내항공"+  ctiutil.blankTab();
    }
    else if(categoryCode =="6003" ) {
      categoryName = ctiutil.blankTab() + "호텔"+  ctiutil.blankTab();
    }
    else if(categoryCode =="6004" ) {
      categoryName = "투어&액티비티&렌터카";
    }
    else if(categoryCode =="IC05" ) {
      categoryName = "묶음할인";
    }
    return categoryName;
  };

  ctiutil.commonName = function (itemType,consulTelDivi) {
    var itemName = "기타";

    if(consulTelDivi =="BIZ") {
      itemName = "알림톡";
    }
    else if(consulTelDivi =="SMS") {
      itemName = "문자";
    }
    else if(consulTelDivi =="EAL") {
      itemName = "이메일";
    }
    else if(itemType =="I"){
      itemName = "예약문의";
    }
    else if(itemType =="J"){
      itemName = "변경/취소문의";
    }
    else if(itemType =="K" ) {
      itemName = "결제문의";
    }
    else if(itemType =="L" ) {
      itemName = "여행정보문의";
    }
    else if(itemType =="M" ) {
      itemName = "칭찬";
    }
    else if(itemType =="N" ) {
      itemName = "불만";
    }
    else if(itemType =="O" ) {
      itemName = "특이이슈";
    }
    else if(itemType =="P" ) {
      itemName = "기타";
    }
    else if(itemType =="H" ) {
      itemName = "방문상담";
    }
    return itemName;
  };

 ctiutil.commonSubName = function (code) {
  var itemName = "기타";
  if(code =="M03"){ itemName = "현지관리"; }
  else if(code =="M04"){ itemName = "일정"; }
  else if(code =="N01"){ itemName = "가이드&인솔자"; }
  else if(code =="N02"){ itemName = "담당자"; }
  else if(code =="N03"){ itemName = "v현지관련"; }
  else if(code =="N04"){ itemName = "예약/취소"; }
  else if(code =="N05"){ itemName = "홈페이지/모바일 이용"; }
  else if(code =="O01"){ itemName = "테러"; }
  else if(code =="O02"){ itemName = "천재지변"; }
  else if(code =="O03"){ itemName = "질병"; }
  else if(code =="O04"){ itemName = "국제정세"; }
  else if(code =="I01"){ itemName = "단순상담/견적"; }
  else if(code =="I02"){ itemName = "실예약"; }
  else if(code =="J01"){ itemName = "상품변경"; }
  else if(code =="J02"){ itemName = "위약금문의"; }
  else if(code =="J03"){ itemName = "여행취소"; }
  else if(code =="K01"){ itemName = "결제요청/방법"; }
  else if(code =="K02"){ itemName = "납부확인"; }
  else if(code =="K03"){ itemName = "결제변경/취소"; }
  else if(code =="K04"){ itemName = "현금영수증"; }
  else if(code =="L01"){ itemName = "일정문의"; }
  else if(code =="L02"){ itemName = "현지정보문의"; }
  else if(code =="L03"){ itemName = "여행자보험"; }
  else if(code =="M01"){ itemName = "가이드&인솔자"; }
  else if(code =="M02"){ itemName = "담당자"; }
  else if(code =="P01"){ itemName = "홈페이지/모바일 이용"; }
  else if(code =="P02"){ itemName = "이벤트/혜택문의"; }
  else if(code =="P03"){ itemName = "기타"; }
  else if(code =="P11"){ itemName = "미수신"; }
  else if(code =="P12"){ itemName = "알림톡"; }
  else if(code =="P13"){ itemName = "문자"; }
  else if(code =="P14"){ itemName = "MO수신"; }
  else if(code =="P15"){ itemName = "메일"; }
  else if(code =="H01"){ itemName = "여행상담"; }
  else if(code =="H02"){ itemName = "결재"; }
  else if(code =="H99"){ itemName = "기타"; }
  else if(code =="N06"){ itemName = "기타"; }

  return itemName;
 }

//CONSUL_TEL_DIVI	BIZ	알림톡
//CONSUL_TEL_DIVI	SMS	문자
//CONSUL_TEL_DIVI	EAL	이메일
//CONSUL_TEL_DIVI	CBO	챗봇
//CONSUL_TEL_DIVI	NBC	미수신CALL
//CONSUL_TEL_DIVI	IBC	수신CALL
//CONSUL_TEL_DIVI	OBC	발신CALL
//CONSUL_TEL_DIVI	CBC	CALLBACK
//CONSUL_TEL_DIVI	NOC	무통화상담

  ctiutil.blank = function () {
    return "&nbsp;";
  };

  ctiutil.null = function (value) {
    return value == null ? "-" : value;
  };

  ctiutil.blankTab = function () {
    return "&nbsp;&nbsp;&nbsp;&nbsp;";
  };

  ctiutil.gfn_getToday = function () {
    var d = new Date();
    return d.getFullYear() + ctiutil._pad(1 + d.getMonth(), '2') + ctiutil._pad(d.getDate(), '2');
  };

  ctiutil.gfn_getToday2 = function () {
    var d = new Date();
    return d.getFullYear() + '-' + ctiutil._pad(1 + d.getMonth(), '2') + '-' + ctiutil._pad(d.getDate(), '2');
  };

  ctiutil.gfn_getBeforeMonthday = function () {
    var d = new Date();
    d.setMonth(d.getMonth() - 64);
    return d.getFullYear() + ctiutil._pad(1 + d.getMonth(), '2') + ctiutil._pad(d.getDate(), '2');
  };

  ctiutil.gfn_getBeforeMonthday2 = function () {
    var d = new Date();
    d.setMonth(d.getMonth() - 64);
    return d.getFullYear() + '-' + ctiutil._pad(1 + d.getMonth(), '2') + '-' + ctiutil._pad(d.getDate(), '2');
  };

  ctiutil.gfn_getTodayTime = function () {
    var d = new Date();
    return (
      d.getFullYear() + ctiutil._pad(1 + d.getMonth(), '2') + ctiutil._pad(d.getDate(), '2') + ctiutil._pad(d.getHours(), '2') + ctiutil._pad(d.getMinutes(), '2') + ctiutil._pad(d.getSeconds(), '2')
    );
  };

  ctiutil.EncKey = function () {
    var strHASH_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var strKey = 'BRIDGETEC_VELOCE';
    var strTodayTime = ctiutil.gfn_getTodayTime();
    var strTime =
      strTodayTime.substring(12, 14) + strTodayTime.substring(10, 12) + strTodayTime.substring(4, 6) + strTodayTime.substring(0, 4) + strTodayTime.substring(6, 8) + strTodayTime.substring(8, 10);

    var nKeyLen = pFilePath.length;
    var nKeyTableSize = strHASH_TABLE.length;

    while (strKey.length < nKeyLen) {
      strKey = strKey + strKey;
    }

    while (strTime.length < nKeyLen) {
      strTime = strTime + strTime;
    }

    var chKey;
    var chTime;
    var chUcid;
    var chEncKey;

    var szEncKey = new Array(nKeyLen); // arrayLength의 크기를 가진 배열

    for (i = 0; i < nKeyLen; i++) {
      chKey = strKey.charAt(i);
      chTime = strTime.charAt(i);
      chUcid = pFilePath.charAt(i);
      var nKey = chKey.charCodeAt(0);
      var nTime = chTime.charCodeAt(0);
      var nUcid = chUcid.charCodeAt(0);
      nChar = (nUcid + nKey + nTime) % nKeyTableSize;
      chEncKey = strHASH_TABLE.charAt(nChar);
      szEncKey[i] = chEncKey;
    }

    szEncKey = szEncKey.toString().replace(',', '');
    return szEncKey;
  };

  ctiutil._pad = function (n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
  };

  ctiutil.nvl = function nvl(str, defaultStr) {
    if (typeof str == 'undefined' || str == null || str == '') str = defaultStr;
    return str;
  };

  ctiutil.isNotNvl = function nvl(str, defaultStr) {
    return !(typeof str == 'undefined' || str == null || str == '');
  };

  ctiutil.sortJSON = function (data, key, type) {
    if (type == undefined) {
      type = 'asc';
    }
    return data.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      if (type == 'desc') {
        return x > y ? -1 : x < y ? 1 : 0;
      } else if (type == 'asc') {
        return x < y ? -1 : x > y ? 1 : 0;
      }
    });
  };

  ctiutil.arrayVal = function (arrStr, defaultStr) {
    var str = '';
    if (typeof arrStr == 'undefined') str = defaultStr;
    else str = arrStr[0];

    return str;
  };

  ctiutil.isLog = function () {
    var hostname = window.location.hostname;
    var isLog = false;
    //if (hostname == "localhost" || hostname.match(/dev-/) || hostname.match(/test-/)) isLog = true;
    if (hostname == 'localhost' || hostname.match(/dev-/)) isLog = true;
    //return isLog;
    return true;
  };

  ctiutil.banishment = function () {
    ctiPage.banishment = true;
  };

  ctiutil.popBookingList = function (value, isBookingCode) {
    var sessionData = sessionStorage.getItem('__app_storage__');
    var options = 'height=950,width=1600,left=0,top=0,toolbar=no,menubar=no,scrollbars=no,resizable=yes,location=no,status=no';
    var bookingUrl = "";
    var content = "";

    if(isBookingCode) {
      ctiPage.cksReservationlistPhoneNo = false;
      ctiPage.ckReservationlistBookingCode = true;
      ctiPage.cksReservationlistValue = value.substring(0,value.indexOf("-", 0));
    }
    else {
      ctiPage.cksReservationlistPhoneNo = true;
      ctiPage.ckReservationlistBookingCode = false;
      ctiPage.cksReservationlistValue = value.substring(0,value.indexOf("-", 0));
    }
    $("#g_destdn").trigger('click');
  };

  ctiutil.popBookingDetail = function (value, isBookingCode) {
    var sessionData = sessionStorage.getItem('__app_storage__');
    var options = 'height=950,width=1600,left=0,top=0,toolbar=no,menubar=no,scrollbars=no,resizable=yes,location=no,status=no';
    var bookingUrl = '';
    var content = '';

    var category;
    var bookingItemCode = value;

    if (bookingItemCode.indexOf('F') > -1) {
      category = 'flight';
    } else if (bookingItemCode.indexOf('H') > -1) {
      category = 'hotel';
    } else if (bookingItemCode.indexOf('C') > -1) {
      category = 'car';
    } else if (bookingItemCode.indexOf('A') > -1) {
      category = 'activity';
    } else {
      category = 'flight';
    }
    window.open(`${window.location.origin}/reservation/${category}/${bookingItemCode}?tabName=BASIS`, '_blank', options);
    return;
   };

})((window.ctiutil = {}));
