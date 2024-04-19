
(function (ctiPage) {

  //로그인 정보
  ctiPage.usertoken = "";
  ctiPage.extensionNo = "";
  ctiPage.ctiAutoLogin = "";
  ctiPage.ybUserId = "";
  ctiPage.ybUserNo = "";
  ctiPage.IpAddr = "";
  //기존 연결자 확인
  ctiPage.banishment = false;
  //현재 요청한 메뉴이름
  ctiPage.actionName = "";
  ctiPage.eventName = "RELEASED";
  ctiPage.eventSubName = "";

  ctiPage.ckReservationlistBookingCode = false;
  ctiPage.cksReservationlistPhoneNo = false;
  ctiPage.cksReservationlistValue = "";


  //테스트 초기화 값
  ctiPage.g_AppName = "WebAPI";				//앱네임
  ctiPage.g_IpAddr1 = "106.245.140.235";		//IP1
  ctiPage.g_IpAddr2 = "106.245.140.236";		//IP2
  ctiPage.g_Port = "9203";				//PORT
  ctiPage.g_Protocol = "https";				//PROTOCOL TYPE
  ctiPage.g_Dn = "729";				//내선전화번호
  ctiPage.g_Dn2 = "729";				//내선전화번호2
  ctiPage.g_Dn3 = "729";				//내선전화번호3
  ctiPage.g_TenantName = "ybtour";			//테넌트네임(고정)
  ctiPage.g_TenantName2 = "ybtour";			//테넌트네임2(고정)
  ctiPage.g_TenantName3 = "ybtour";			//테넌트네임3(고정)
  ctiPage.isInterval = false;
  ctiPage.g_AgentId = "ota01";				//상담원ID
  ctiPage.g_AgentPassword = "";				//상담원PWD
  ctiPage.g_agentState = "40";					//상담원상태
  ctiPage.g_agentStateSub = "";					//상담원휴식사유코드
  ctiPage.g_returnMSG = "";
  ctiPage.g_returnCodeMsg = "";
  ctiPage.g_PasswdType = "4";					//비밀번호 암호화타입
  ctiPage.g_destdn = "9";		//아웃바운드 번호
  ctiPage.g_transferdn = '257'				//호전환대상번호
  ctiPage.g_chkValue = "";
  ctiPage.g_result = "";
  ctiPage.g_index = 0;
  ctiPage.g_height = 0;
  ctiPage.inquiryType = "";
  ctiPage.inquirySubType = "";

  //기존 오마이호텔 변수 (참고)
  ctiPage.sExten = "";
  ctiPage.icConnId = ""; //e.conn_id;
  ctiPage.icPrevConnId = ""; //e.conn_id;
  ctiPage.icOtherDn = ""; //e.other_dn;
  ctiPage.icHop = ""; //e.hop;
  ctiPage.icUcid = ""; //ctiutil.gfn_getToday() + "_" + e.ucid + "_" + sExten;
  ctiPage.icExtension = ""; //e.extension;
  ctiPage.icAniDn = ""; //e.dnis //고객번호
  ctiPage.consulState = "";
  ctiPage.sTelType = "";  //콜백발신콜 CBC, 발신콜 OBC , 수신콜 IBC
  ctiPage.isMakeCallDn = false;

  //최근 데이터
  ctiPage.ipronData = {}; //e.dnis //고객번호
  ctiPage.g_GrpNo = "";
  ctiPage.g_GrpName = "";
  ctiPage.g_returnSubCode = "";
  ctiPage.g_subMenuName = "";
  ctiPage.g_ANI = "";
  ctiPage.transAgentPhone = ""; //0 수신가능
  ctiPage.transAgentStatus = "";
  ctiPage.transAgentExtensionNo = "";
  ctiPage.transAgentPart = "";
  ctiPage.swatAgent = [];
  ctiPage.swatAgentSelected = {};
  ctiPage.swatCallbackRs = [];
  ctiPage.swatCustomerInfoRs = [];

  //고객상담
  ctiPage.swatConsultingListRs = [];
  ctiPage.swatBookingListRs = [];

  //사용자 검색
  ctiPage.swatCusConsultingListRs = [];
  ctiPage.swatCusBookingListRs = [];

  ctiPage.swatCusInfoRs = [];


  ctiPage.chk = function (value) {
    ctiPage.g_chkValue = value;
  };

  //서비스 전달
  ctiPage.chk_route = function (value) {
    ctiPage.g_chkValue = value;
    ctiPage.actionName = value;

    //로그 남기고 종료
    if (ctiPage.g_chkValue == "log") {
      if (ctiutil.isLog) console.log("=======================================================================================");
      if (ctiutil.isLog) console.log("returnRES data[" + $("#returnRES").val() + "]");
      if (ctiutil.isLog) console.log("pushEVT_RES data[" + $("#pushEVT_RES").val() + "]");
      if (ctiutil.isLog) console.log("returnEVT data[" + $("#returnEVT").val() + "]");
      if (ctiutil.isLog) console.log("pushEVT data[" + $("#pushEVT").val() + "]");
      if (ctiutil.isLog) console.log("returnEVT_RES data[" + $("#returnEVT_RES").val() + "]");
      $("#returnRES").val('');
      $("#pushEVT_RES").val('');
      //client.GetAgentInfoEx();
      //ctiutil.popBookingDetail ('2011261001-F01');
      return;
    }

    //로그인/로그아웃
    if (ctiFunc.bReconnect == true && ctiPage.g_chkValue == "agentLogin") {
      ctiPage.cti_agentLogout();
    }
    else if (ctiFunc.bReconnect == false && ctiPage.g_chkValue == "agentLogin") {
      ctiPage.cti_openServer();
    }

    //상담사 상태 변경 확인 후 분기
    if (ctiFunc.bReconnect == false && ctiPage.g_chkValue != "agentLogin") {
      ctiPage.openModal('알림', '로그인 상태가 아닙니다.');
    }
    else if (ctiPage.g_chkValue == "openServer") {
      ctiPage.cti_openServer();
    } else if (ctiPage.g_chkValue == "closeServer") {
      ctiPage.cti_closeServer();
    } else if (ctiPage.g_chkValue == "register") {
      ctiPage.cti_register();
    } else if (ctiPage.g_chkValue == "unRegister") {
      ctiPage.cti_unRegister();
    //} else if (ctiPage.g_chkValue == "agentLogin") {
    //  ctiPage.cti_agentLogin();
    } else if (ctiPage.g_chkValue == "agentLogout") {
      ctiPage.cti_agentLogout();
    } else if (ctiPage.g_chkValue == "GetStateSubcode") {
      ctiPage.cti_GetStateSubcode();
    } else if (ctiPage.g_chkValue == "SetAFTCallState") {
      ctiPage.cti_SetAFTCallState('60');
    } else if (ctiPage.g_chkValue == "SetAgentState") {
      ctiPage.cti_SetAgentState();
    } else if (ctiPage.g_chkValue == "GetAgentState") {
      ctiPage.cti_GetAgentState();
    } else if (ctiPage.g_chkValue == "MakeCall") {
      ctiPage.sTelType = "OBC";  //콜백발신콜 CBC, 발신콜 OBC , 수신콜 IBC
      ctiPage.cti_MakeCall();
      ctiPage.chk_agentState('00', false);
    } else if (ctiPage.g_chkValue == "MakeCallOut") {
      ctiPage.sTelType = "CBC";  //콜백발신콜 CBC, 발신콜 OBC , 수신콜 IBC
      ctiPage.cti_MakeCall();
      ctiPage.chk_agentState('00', false);
    } else if (ctiPage.g_chkValue == "MakeCallDn") {
      //ctiPage.GetAgentInfoEx_Transferdn();
      ctiPage.swatAgentStatus('MakeCallDn');
      ctiPage.sTelType = "CBC";  //콜백발신콜 CBC, 발신콜 OBC , 수신콜 IBC
      //ctiPage.cti_MakeCallDn();
      //ctiPage.chk_agentState('00', false);
    } else if (ctiPage.g_chkValue == "AnswerCall") {
      ctiPage.cti_AnswerCall();
      ctiPage.chk_agentState('00', false);
    } else if (ctiPage.g_chkValue == "ClearCall") {
      ctiPage.cti_ClearCall();
      ctiPage.chk_agentState('40', false);
    } else if (ctiPage.g_chkValue == "SinglestepTransfer") {
      ctiPage.sTelType = "IBC";
      if ($("#g_transferdn").val().length > 0) ctiPage.swatAgentStatus('SinglestepTransfer');
      else ctiPage.openModal('알림', '내선번호를 확인해주세요.');
    } else if (ctiPage.g_chkValue == "HoldCall") {
      ctiPage.cti_HoldCall();
    } else if (ctiPage.g_chkValue == "RetrieveCall") {
      ctiPage.cti_RetrieveCall();
    } else if (ctiPage.g_chkValue == "GetQueueList") {
      ctiPage.cti_GetQueueList();
    } else if (ctiPage.g_chkValue == "QueueReport") {
      ctiPage.cti_QueueReport();
    } else if (ctiPage.g_chkValue == "GetGroupList") {
      ctiPage.cti_GetGroupList();
    }
  };

  //예약조회 열기(예약번호)
  ctiPage.callBookingListFromBookingCode = function (bookigCode) {
    this.reservationListRedirect("bookingCode", bookigCode);
  };
  //예약조회 열기(전화번호)
  ctiPage.callBookingListFromPhoneNo = function (phoneNo) {
    this.reservationListRedirect("bookerMobileNo", phoneNo);
  };

  //서버 Open
  ctiPage.cti_openServer = function () {
    client.SetProtocol($("#g_Protocol").val());
    client.SetServerInfo($("#g_IpAddr1").val(), $("#g_Port").val(), $("#g_IpAddr2").val(), $("#g_Port").val());
    client.OpenServer($("#g_AppName").val(), ctiFunc.CBFuncEvent, ctiFunc.CBFuncResponse);
  };
  //서버  Close
  ctiPage.cti_closeServer = function () {
    client.CloseServer();
  };
  //전화기 register
  ctiPage.cti_register = function () {
    client.Register($("#g_Dn").val(), $("#g_TenantName").val());
  };
  //전화기  unregister
  ctiPage.cti_unRegister = function () {
    client.Unregister($("#g_Dn").val(), $("#g_TenantName").val());
  };
  //상담원 LOGIN
  ctiPage.cti_agentLogin = function () {
    client.AgentLogin($("#g_Dn2").val(), $("#g_AgentId").val(), $("#g_AgentPassword").val(), $("#g_TenantName2").val(), $("#g_agentState").val(), $("#g_agentStateSub").val(), 0, $("#g_PasswdType").val(), 0);
    ctiPage.cti_SetAFTCallState('60');
    //$("#g_transferdn").val(ctiPage.extensionNo);
    $("#g_transferdn").val("");
    $('#b_Consulting').attr('class', 'btn-cti');
    $('#b_AnswerCall').attr('class', 'btn-cti type3');
    $('#consulting_userInfo').attr('class', 'form-option-area');

  };
  //상담원 LOGOUT
  ctiPage.cti_agentLogout = function () {
    client.AgentLogout($("#g_Dn2").val(), $("#g_AgentId").val(), $("#g_TenantName2").val(), 0);
    $('#b_Consulting').attr('class', 'btn-cti');
    $('#b_AnswerCall').attr('class', 'btn-cti type3');
    $('#consulting_userInfo').attr('class', 'form-option-area');
  };
  //상담원 정보 가져오기 (로그인)
  ctiPage.GetAgentInfoEx_Login = function () {
    client.GetAgentInfoEx($("#g_TenantName2").val(), '', $("#g_Dn3").val(), '', '');
  }
  //상담원 정보 가져오기 (호전환)
  ctiPage.GetAgentInfoEx_Transferdn = function () {
    if ($("#g_Dn3").val() == $("#g_transferdn").val()) ctiPage.openModal('알림', '내선번호화 동일합니다.');
    else if (ctiPage.eventName == "RINGING" || ctiPage.eventName == "DIALING") {
      client.GetAgentInfoEx($("#g_TenantName2").val(), '', $("#g_transferdn").val(), '', '');
    }
    else {ctiPage.openModal('알림', '호전환 상태가 아닙니다.');}
  }
  //상담원 정보 가져오기
  ctiPage.GetAgentInfo = function () {
    client.GetAgentInfo($("#g_TenantName2").val(), $("#g_AgentId").val(), '');
  }
  //상담원 휴식사유코드 정보
  ctiPage.cti_GetStateSubcode = function () {
    client.GetStateSubcode($("#g_TenantName2").val(), $("#g_agentState").val());
  };
  //상담원 통화후 상태 변경
  ctiPage.cti_SetAFTCallState = function (status) {
    //if (status.length > 0) $("#g_agentState").val(status);
    //$("#g_agentStateSub").val("0");
    //client.SetAFTCallState($("#g_AgentId").val(), $("#g_TenantName2").val(), $("#g_agentState").val(), $("#g_agentStateSub").val(), '');
    $("#g_agentState").val("60");
    $("#g_agentStateSub").val("");
    client.SetAFTCallState($("#g_AgentId").val(), $("#g_TenantName2").val(), $("#g_agentState").val(), $("#g_agentStateSub").val(), '');
  };
  //상담원 휴식사유코드 변경
  ctiPage.cti_SetAgentState = function () {
    client.SetAgentState($("#g_AgentId").val(), $("#g_TenantName2").val(), $("#g_agentState").val(), $("#g_agentStateSub").val(), 0, 0);
  };

  //상담원 휴식사유 가져오기
  ctiPage.cti_GetAgentState = function () {
    client.GetAgentState($("#g_TenantName2").val(), $("#g_AgentId").val(), 0, 0, 0);
  };

  //상담원 전화 걸기(g_destdn)
  ctiPage.cti_MakeCall = function () {
    if ($("#g_Dn3").val() == $("#g_destdn").val()) ctiPage.openModal('알림', '내선번호화 동일합니다.');
    else if ($('#b_MakeCall').is("[disabled]")) return false;
    else {

      if ($("#g_destdn").val().length > 0) {
        client.MakeCall($("#g_Dn3").val(), $("#g_destdn").val(), $("#g_obcallingdn").val(), 0, 0, "",
          "", 0, 0, 0, 0, $("#TextCallUcid").val(),
          $("#TextExHandle").val(), 0, 0, 0, 0);
        ctiPage.cti_consulting();
      } else {
        ctiPage.openModal('알림', '전화번호를 확인해주세요.');
        //alert('전화번호를 확인해주세요.');
      }
    }
  };

  //내선으로 전화 걸기 (g_transferdn)  true일때 hold를 하고 makeCallDn
  ctiPage.cti_MakeCallDn = function (isTransfer = false) {
    if ($("#g_Dn3").val() == $("#g_transferdn").val()) ctiPage.openModal('알림', '내선번호화 동일합니다.');
    //else if ($('#b_MakeCall').is("[disabled]")) return false;
    else {

      //if (ctiPage.eventName == "RINGING" || ctiPage.eventName == "DIALING") {
      //  ctiPage.isMakeCallDn = true;
      //  ctiPage.cti_HoldCall();
      //}
      //else {
      //  ctiPage.isMakeCallDn = false;
      //}

      if ($("#g_transferdn").val().length > 0) {

        if(isTransfer) {
          ctiPage.cti_HoldCall();
        }
        client.MakeCall($("#g_Dn3").val(), $("#g_transferdn").val(), $("#g_obcallingdn").val(), 0, 0, "",
          "", 0, 0, 0, 0, $("#TextCallUcid").val(),
          $("#TextExHandle").val(), 0, 0, 0, 0);
      } else {
        ctiPage.openModal('알림', '전화번호를 확인해주세요.');
        //alert('전화번호를 확인해주세요.');
      }


    }
  };

  //상담원 전화 받기
  ctiPage.cti_AnswerCall = function () {
    client.AnswerCall($("#g_Dn3").val(), $("#TextConnId").val(), 0, 0);
    ctiPage.cti_consulting();
  };

  //상담원 전화 끊기
  ctiPage.cti_ClearCall = function () {
    client.ClearCall($("#g_Dn3").val(), $("#TextConnId").val(), 0, 0);
    //if(ctiPage.isMakeCallDn) {
    //  ctiPage.cti_RetrieveCall();
    //  ctiPage.isMakeCallDn = false;
    //}

  };
  //전화 넘기기(호전환)
  ctiPage.cti_SinglestepTransfer = function () {
    if ($("#g_Dn3").val() == $("#g_transferdn").val()) ctiPage.openModal('알림', '내선번호화 동일합니다.');
    else if (ctiPage.eventName == "RINGING" || ctiPage.eventName == "DIALING") {
      client.SinglestepTransfer($("#g_Dn3").val(), $("#TextConnId").val(), $("#g_transferdn").val(), $("#g_obcallingdn").val(), 0, 0, 0, 0, 0, 0, 0, 0, $("#TextExHandle").val(), 0, 0, 0, 0);
    }
    else {
     ctiPage.openModal('알림', '호전환 상태가 아닙니다.');
    }

  };

  //전화 넘기기(호전환 대기호 있음)
  ctiPage.cti_MuteTransfer = function () {
    if (ctiPage.eventName == "RINGING" || ctiPage.eventName == "DIALING") {
      client.MuteTransfer($("#g_Dn3").val(), $("#TextPrevConnId").val(), $("#g_transferdn").val(), $("#TextExHandle").val(), 0);
    }
  };

  ctiPage.cti_MuteTransferFromConsul = function () {
    ctiPage.cti_MuteTransfer();
    ctiPage.cti_consultingClose('save');
  };

  //상담원 전화 홀드
  ctiPage.cti_HoldCall = function () {
    if (ctiPage.eventName == "RINGING" || ctiPage.eventName == "DIALING") {
      client.HoldCall($("#g_Dn").val(), $("#TextConnId").val(), 0, 0);
    }
  };
  //상담원 전화 홀드 해제 true일때 전화를 끊고 retrive 호출
  ctiPage.cti_RetrieveCall = function (isTransfer = false) {
    if(isTransfer) {
      ctiPage.cti_ClearCall();
      client.RetrieveCall($("#g_Dn3").val(), $("#TextPrevConnId").val(), 0, 0);
    }
    else {
      client.RetrieveCall($("#g_Dn3").val(), $("#TextConnId").val(), 0, 0);
    }
    /*
    if (ctiPage.eventName == "RINGING" || ctiPage.eventName == "DIALING") {
      if(isTransfer) {
        ctiPage.cti_ClearCall();
        client.RetrieveCall($("#g_Dn3").val(), $("#TextConnId").val(), 0, 0);
      }
      else {
        client.RetrieveCall($("#g_Dn3").val(), $("#TextPrevConnId").val(), 0, 0);
      }
    }*/
  };
  //큐 리스트 구하기
  ctiPage.cti_GetQueueList  = function () {
    if (ctiFunc.bReconnect) {
      //client.GetQueueList($("#g_TenantName3").val(), "");
      client.GetAgentQueueList($("#g_TenantName3").val(), $("#g_AgentId").val());
    }
  };
  //큐 리포트 조회
  ctiPage.cti_QueueReport = function () {
    client.QueueReport($("#g_TenantName3").val(), $("#g_queuelist").val(), 0);
  };
  //상담그룹 리스트 조회
  ctiPage.cti_GetGroupList = function () {
    client.GetGroupList($("#g_TenantName3").val(), 0);
  };

  //상담사 하위 상태변경
  ctiPage.chk_agentStateSub = function (value, isChane = true, isClick =false) {
    var stat = value;
    if(isClick) {
      if (ctiPage.eventName == "RINGING" || ctiPage.eventName == "DIALING") {
        return;
      }
    }
    if (ctiFunc.bReconnect == false) {
      ctiPage.openModal('알림', '로그인 상태가 아닙니다.'); //alert('로그인 상태가 아닙니다.');
      return;
    }

    if (stat == "") {
      return;
    }

    //value="0" 이석
    if (stat == "0") {
      $("#g_agentStateSub0").attr("class", "btn-cti active");
      $("#g_agentStateSub1").attr("class", "btn-cti");
      $("#g_agentStateSub2").attr("class", "btn-cti");
      $("#g_agentStateSub3").attr("class", "btn-cti");
      $("#g_agentStateSub4").attr("class", "btn-cti");
      //value="1" 식사
    } else if (stat == "1") {
      $("#g_agentStateSub0").attr("class", "btn-cti");
      $("#g_agentStateSub1").attr("class", "btn-cti active");
      $("#g_agentStateSub2").attr("class", "btn-cti");
      $("#g_agentStateSub3").attr("class", "btn-cti");
      $("#g_agentStateSub4").attr("class", "btn-cti");
      //value="2" 교육
    } else if (stat == "2") {
      $("#g_agentStateSub0").attr("class", "btn-cti");
      $("#g_agentStateSub1").attr("class", "btn-cti");
      $("#g_agentStateSub2").attr("class", "btn-cti active");
      $("#g_agentStateSub3").attr("class", "btn-cti");
      $("#g_agentStateSub4").attr("class", "btn-cti");
      //value="3" 작업
    } else if (stat == "3") {
      $("#g_agentStateSub0").attr("class", "btn-cti");
      $("#g_agentStateSub1").attr("class", "btn-cti");
      $("#g_agentStateSub2").attr("class", "btn-cti");
      $("#g_agentStateSub3").attr("class", "btn-cti active");
      $("#g_agentStateSub4").attr("class", "btn-cti");
      //value="4" 접견
    } else if (stat == "4") {
      $("#g_agentStateSub0").attr("class", "btn-cti");
      $("#g_agentStateSub1").attr("class", "btn-cti");
      $("#g_agentStateSub2").attr("class", "btn-cti");
      $("#g_agentStateSub3").attr("class", "btn-cti");
      $("#g_agentStateSub4").attr("class", "btn-cti active");
    }

    $("#g_agentState").val("30");
    $("#g_agentStateSub").val(stat);
    if (isChane) ctiPage.cti_SetAgentState();

    $("#g_agentState50").attr("class", "btn-cti");
    $("#g_agentState40").attr("class", "btn-cti");
    $("#g_agentState60").attr("class", "btn-cti");

  };
  //상담사 로그인상태
  ctiPage.chk_loginState = function (value) {
    var stat = value;

    if (stat == 'login') {
      $('#b_MakeCall').removeAttr('disabled');
      $('#b_AnswerCall').removeAttr('disabled');
      $('#b_ClearCall').removeAttr('disabled');
      $('#b_SinglestepTransfer').removeAttr('disabled');
      $('#b_RetrieveCall').removeAttr('disabled');
      $('#b_HoldCall').removeAttr('disabled');
      //$('#b_callback').removeAttr('disabled');
      $('#b_Agent').removeAttr('disabled');

      $('#g_agentState50').attr("class", "btn-cti");
      $('#g_agentState40').attr("class", "btn-cti active");
      $('#g_agentState60').attr("class", "btn-cti");
      $('#g_agentStateSub0').attr("class", "btn-cti");
      $('#g_agentStateSub1').attr("class", "btn-cti");
      $('#g_agentStateSub2').attr("class", "btn-cti");
      $('#g_agentStateSub3').attr("class", "btn-cti");
      $('#g_agentStateSub4').attr("class", "btn-cti");
      $("#b_agentLogin").text('로그아웃');
    }
    else if (stat == 'logout') {
      $("#g_RecordCount").val('');
      $("#g_transferdn").val('');
      $("#g_destdn").val('');
      $("#g_usernm").val('');

      $('#b_MakeCall').attr("disabled", true);
      $('#b_AnswerCall').attr("disabled", true);
      $('#b_ClearCall').attr("disabled", true);
      $('#b_SinglestepTransfer').attr("disabled", true);
      $('#b_RetrieveCall').attr("disabled", true);
      $('#b_HoldCall').attr("disabled", true);
      //$('#b_callback').attr("disabled", true);
      $('#b_Agent').attr("disabled", true);

      $('#g_agentState50').attr("class", "btn-cti");
      $('#g_agentState40').attr("class", "btn-cti");
      $('#g_agentState60').attr("class", "btn-cti");
      $('#g_agentStateSub0').attr("class", "btn-cti");
      $('#g_agentStateSub1').attr("class", "btn-cti");
      $('#g_agentStateSub2').attr("class", "btn-cti");
      $('#g_agentStateSub3').attr("class", "btn-cti");
      $('#g_agentStateSub4').attr("class", "btn-cti");
      $("#b_agentLogin").text('로그인');
    }

  };
  //상담사 상태변경
  ctiPage.chk_agentState = function (value, isChane =true, isClick =false) {
    var stat = value;
    if(isClick) {
      if (ctiPage.eventName == "RINGING" || ctiPage.eventName == "DIALING") {
        return;
      }
    }
    if (ctiFunc.bReconnect == false) {
      ctiPage.openModal('알림', '로그인 상태가 아닙니다.'); //alert('로그인 상태가 아닙니다.');
      return;
    }

    $("#g_agentStateSub0").attr("class", "btn-cti");
    $("#g_agentStateSub1").attr("class", "btn-cti");
    $("#g_agentStateSub2").attr("class", "btn-cti");
    $("#g_agentStateSub3").attr("class", "btn-cti");
    $("#g_agentStateSub4").attr("class", "btn-cti");

    //value="" 상담중 //50
    if (stat == "00" || stat == "" || stat == "50" ) {
      stat = "50";
      $("#g_agentState50").attr("class", "btn-cti active");
      $("#g_agentState40").attr("class", "btn-cti");
      $("#g_agentState60").attr("class", "btn-cti");
      $("#g_agentStateSub").val("");
      $("#g_agentState").val(stat);
      if (isChane) ctiPage.cti_SetAgentState();
      //value="40" 대기
    } else if (stat == "40") {
      $("#g_agentState50").attr("class", "btn-cti");
      $("#g_agentState40").attr("class", "btn-cti active");
      $("#g_agentState60").attr("class", "btn-cti");
      $("#g_agentStateSub").val("");
      $("#g_agentState").val(stat);
      if (isChane) ctiPage.cti_SetAgentState();
      //value="60" 후처리
    } else if (stat == "60") {
      $("#g_agentState50").attr("class", "btn-cti");
      $("#g_agentState40").attr("class", "btn-cti");
      $("#g_agentState60").attr("class", "btn-cti active");
      $("#g_agentStateSub").val("");
      $("#g_agentState").val(stat);
      if (isChane) ctiPage.cti_SetAgentState();
    }

    //자리 비움으로 오면 이석 처리
    if (stat == "30") {
      $("#g_agentState").val(stat);
      $("#g_agentStateSub0").attr("class", "btn-cti active");
      $("#g_agentStateSub1").attr("class", "btn-cti");
      $("#g_agentStateSub2").attr("class", "btn-cti");
      $("#g_agentStateSub3").attr("class", "btn-cti");
      $("#g_agentStateSub4").attr("class", "btn-cti");
    }

  };

  // popup
  //상담사 리스트 popup
  ctiPage.cti_agentSearch = function (call = '') {

    //$('#b_AnswerCall').attr('class', 'tn-cti type3 outline-red');

    if (ctiFunc.bReconnect == true) {
      var lay_pop = $("#modal_agentSearch");
      ctiPage.swatAgentList('swatAgentList',  ctiPage.g_Part);
      lay_pop.addClass('active');
    }
  };

  //상담사 리스트 popup 닫기
  ctiPage.cti_agentSearchClose = function () {
    var lay_pop = $("#modal_agentSearch");
    lay_pop.removeClass('active');
  };

  //고객상담 consulting popup
  ctiPage.cti_consulting = function (call = '') {

    if($('#b_Consulting').attr('class').indexOf('outline-red') > -1 ) {

      $('#b_Consulting').attr('class', 'btn-cti');

      var lay_pop = $("#modal_consulting");
      lay_pop.addClass('active');

    }
    else {
        //if (ctiFunc.bReconnect == true && $('#TextConnId').val().length > 0) {

        //연결상태 체크
        //if (ctiFunc.bReconnect == true ) {
        //ctiutil.popBookingList($("#g_destdn").val() ,false);

        //통화중인 상태일대만 상담중으로 변경
        if (ctiPage.eventName == "RINGING" || ctiPage.eventName == "DIALING") {
          ctiPage.chk_agentState('50', true); //상담중
        }
        ctiPage.consulState = "OPEN";
        var lay_pop = $("#modal_consulting");

        //if (ctiPage.swatCustomerInfoRs.length == 1) {
        //  $("#consul_custCnt").val(ctiPage.swatCustomerInfoRs.length);
        //  $("#consul_custNm").val(ctiPage.swatCustomerInfoRs[0].custNm);
        //  $("#consul_custInfoTypeNm").val(ctiPage.swatCustomerInfoRs[0].custStatNm);
        //  $("#consul_custTelNo").val(ctiPage.swatCustomerInfoRs[0].phone);
        //}
        //else {
        //  $("#consul_custCnt").val('0');
        //  $("#consul_custNm").val('');
        //  $("#consul_custInfoTypeNm").val('');
        //  $("#consul_custTelNo").val('');
        //}


        if ($("#g_destdn").val().length > 0) {
          $("#consul_callerTelNo").val($("#g_destdn").val());
          $("#consul_custTelNo").val($("#g_destdn").val());
          $("#consul_custNm").val('');
          $("#consul_custInfoTypeNm").val('');
          //$("#customer_phoneFull").val($("#g_destdn").val());
          $("#consul_callerTelNo").val($("#g_destdn").val());

          ctiPage.swatCustomerInfo('swatSelectCustomerInfo', $("#g_destdn").val());
          ctiPage.swatConsultingList('swatConsultingList', $("#g_destdn").val());
          ctiPage.swatBookingList('swatBookingList', $("#g_destdn").val());

          if(ctiPage.g_urgentCustomer == 'Y') {
            $('#consulting_userInfo').attr('class', 'form-option-area outline-red');
          }
          else {
            $('#consulting_userInfo').attr('class', 'form-option-area');
          }

          if(ctiPage.g_BookingCode.length > 0 ) {
            $("#consul_bookingCode ").val(ctiPage.g_BookingCode);
            $("#consul_bookingCode_call ").val(ctiPage.g_BookingCode);
            ctiPage.cti_swatBookingListRefresh($('#consul_bookingCode').val());
          }
        }

        //1 K01: 결제문의
        //2 J01: 변경문의 ,
        //3 J03  취소/환불문의
        //4 P03 :기타문의

        //1: : 'K': 'K03': '결제변경/취소'
        //2: 'J': 'J01': '상품변경'
        //3: : 'J': 'J03': '변경/취소문의'
        //4 : 'P': 'P03': '기타'

        let inquiryTypeArr = [];
        inquiryType = "";
        inquirySubType ="";
        if(ctiPage.g_returnSubCode =='1') {
          inquiryType = "K";
          inquirySubType = "K03";
        } else if(ctiPage.g_returnSubCode =='2') {
          inquiryType = "J";
          inquirySubType = "J01";
        } else if(ctiPage.g_returnSubCode =='3') {
          inquiryType = "J";
          inquirySubType = "J03";
        } else if(ctiPage.g_returnSubCode =='4') {
          inquiryType = "P";
          inquirySubType = "P03";
        } else {
          inquiryType = "P";
          inquirySubType = "P03";
          ctiPage.g_returnSubCode = '4';
        }

        ctiPage.inquiryType = inquiryType;
        ctiPage.inquirySubType = inquirySubType;

        $("input:radio[name='consul_inquiryType']:radio[value=\'" + ctiPage.g_returnSubCode + "\']").prop('checked', true);
        //ctiPage.inquiryType = inquiryType;
        //ctiPage.inquirySubType = inquiryTypeArr[0];
        /*
        $('#inquirySubType label').remove();
        const regex = new RegExp(ctiPage.inquiryType, 'i');
        $.each(inquiryTypeArr, function (key, val) {
            if (val.pcode.search(regex) != -1) {
              $('#inquirySubType').append(
                '<label class="radio">' +
                  '<input type="radio" name="consul_inquirySubType" id="consul_inquirySubType' +
                  key +
                  '" value="' +
                  val.code +
                  '"  class="radio-control-input">' +
                  '<span class="radio-control-text">' +
                  val.name +
                  '</span></label>',
              );
            }
        });

        $("input:radio[name='consul_inquirySubType']:radio[value=\'" + inquirySubType + "\']").prop('checked', true);
       */
        //전화 유형설정
        var sTelTypeTmp = "IBC";
        if (ctiPage.sTelType.length == 0) {
          sTelTypeTmp = "NOC";
        }
        else if (ctiPage.sTelType == 'CBC') {
          sTelTypeTmp = "IBC";
        }
        else {
          sTelTypeTmp = ctiPage.sTelType;
        }

        $("input:radio[name='consul_phoneType']:radio[value=\'" + sTelTypeTmp + "\']").prop('checked', true);
        lay_pop.addClass('active');
    }



        //lay_pop.addClass('no-bg');
        //}
  };

  //고객상담 popup close
  ctiPage.cti_consultingClose = function (call='') {
    var lay_pop = $("#modal_consulting");
    lay_pop.removeClass('active');

    if(call =='save') {
      //끊기
      ctiPage.chk_route('ClearCall');
      //대기
      ctiPage.chk_agentState('40',true);
      //내용 초기화
      //$("#consul_content").val("");
      ctiFunc.ClearDisplayInfo();
      //레드라인 초기화
      $('#consulting_userInfo').attr('class', 'form-option-area');
    }

    if(call =='hide') {
      $('#b_Consulting').attr('class', 'btn-cti outline-red');
    }

  };

  //고객찾기 popup
  ctiPage.cti_customerSearch = function () {
    $("#customer_name").val($("#consul_custNm").val());
    $("#customer_id").val("");
    $("#customer_birth").val("");
    $("#customer_phone").val("");
    $("#customer_phoneFull").val($("#consul_callerTelNo").val());
    $("#customer_type").val("").prop("selected", true);

    var lay_pop = $("#modal_customerSearch");
    lay_pop.addClass('active');
  };

  //고객찾기 popup close
  ctiPage.cti_customerSearchClose = function () {
    var lay_pop = $("#modal_customerSearch");
    lay_pop.removeClass('active');
  };

  //고객찾기 popup reset
  ctiPage.cti_customerSearchReset = function () {
    $("#customer_name").val('');
    $("#customer_id").val('');
    $("#customer_birth").val('');
    $("#customer_phone").val('');
    $("#customer_phoneFull").val('');
    $("#customer_type").val('');
  };

  //고객찾기 API 호출
  ctiPage.cti_customerSearchQuery = function () {
    if (
      $("#customer_name").val() == '' &&
      $("#customer_id").val() == '' &&
      $("#customer_birth").val() == '' &&
      $("#customer_phone").val() == '' &&
      $("#customer_phoneFull").val() == ''
    ) {
      ctiPage.openModal('알림', '검색 조건을 1개 이상 입력해 주세요.');
    }
    else {
      ctiPage.swatCustomerInfo('swatCustomerInfo', 'customer')
    }
  };

  //callback popup
  ctiPage.cti_callback = function (action = '') {
    if (ctiFunc.bReconnect == true) {
      var lay_pop = $("#modal_callback");
      lay_pop.addClass('active');
      ctiPage.isInterval = false;
    }
  };

  //callback popup 닫기
  ctiPage.cti_callbackClose = function () {
    var lay_pop = $("#modal_callback");
    lay_pop.removeClass('active');
    ctiPage.isInterval = true;
  };

  //콜백리스트 from 달력 popup
  ctiPage.callback_calendarFrom = function () {
    if (ctiFunc.bReconnect == true) {
      var lay_pop = $("#modal_calendar");
      var pos = $("#callback_from").position();    // 버튼의 위치에 레이어를 띄우고자 할 경우, 위치 정보 가져옴
      var topPix = 200;
      var leftPix = pos.left;

      lay_pop.css('top', topPix + 'px'); //레이어팝업 style="(top 좌표값 - 100)px";
      lay_pop.css('left', leftPix + 'px'); //레이어팝업 style="(top 좌표값 - 100)px";
      lay_pop.css('position', 'absolute'); //레이어팝업 style="(top 좌표값 - 100)px";

      lay_pop.addClass('active');
      lay_pop.addClass('no-bg');

    }
  };

  //콜백리스트 to 달력 popup
  ctiPage.callback_calendarTo = function () {
    if (ctiFunc.bReconnect == true) {
      var lay_pop = $("#modal_calendar");
      var pos = $("#callback_to").position();    // 버튼의 위치에 레이어를 띄우고자 할 경우, 위치 정보 가져옴
      var topPix = 200;
      var leftPix = pos.left;

      lay_pop.css('top', topPix + 'px'); //레이어팝업 style="(top 좌표값 - 100)px";
      lay_pop.css('left', leftPix + 'px'); //레이어팝업 style="(top 좌표값 - 100)px";
      lay_pop.css('position', 'absolute'); //레이어팝업 style="(top 좌표값 - 100)px";

      lay_pop.addClass('active');
      lay_pop.addClass('no-bg');
    }
  };

  // popup end

  //전문 통신 SendData
  ctiPage.SendData = function (serverName, serviceId, url, type, header, rqData, channel = '') {

    var hostname = window.location.hostname;
    var ybtourHost = "";
    var otaHost = "";
    var apiUrl = "";
    var dataType = "json";

    // if (serverName == "iframe") {
    //   $('#webCros').attr('src', url);
    // }
    // else {
    //   if (serverName == "swat") {
    //     apiUrl = url;
    //   } else if (hostname == "localhost") {
    //     otaHost = "https://dev-apiota.ybtour.co.kr";
    //     ybtourHost = "https://apidev.ybtour.co.kr";
    //   } else if (hostname.match(/dev-/)) {
    //     otaHost = "https://dev-apiota.ybtour.co.kr";
    //     ybtourHost = "https://apidev.ybtour.co.kr";
    //   } else if (hostname.match(/br1-/)) {
    //     otaHost = "https://br1-apiota.ybtour.co.kr";
    //     ybtourHost = "https://apidev.ybtour.co.kr";
    //   } else if (hostname.match(/br2-/)) {
    //     otaHost = "https://br2-apiota.ybtour.co.kr";
    //     ybtourHost = "https://apidev.ybtour.co.kr";
    //   } else if (hostname.match(/test-/)) {
    //     otaHost = "https://test-apiota.ybtour.co.kr";
    //     ybtourHost = "https://sapi.ybtour.co.kr";
    //   } else {
    //     otaHost = "https://apiota.ybtour.co.kr";
    //     ybtourHost = "https://api.ybtour.co.kr";
    //   }

    //   if (serverName == "ota") {
    //     apiUrl = otaHost + url;
    //   } else if (serverName == "ybtour") {
    //     apiUrl = ybtourHost + url;
    //     dataType = "json";
    //   }

    //   $.support.cors = true;
    //   var ajax = $.ajax({
    //     cache: false,
    //     crossDomain: true,
    //     url: apiUrl,
    //     headers: header,
    //     type: type,
    //     contentType: 'application/json; charset=utf-8',
    //     dataType: dataType,
    //     data: rqData,
    //     timeout: 6000,
    //     success: function (data) {
    //       if (ctiutil.isLog) console.log('==============================================\n');
    //       if (ctiutil.isLog) console.log(apiUrl + '\n');
    //       if (ctiutil.isLog) console.log(serviceId + '\n');
    //       if (ctiutil.isLog) console.log(rqData + '\n');
    //       if (ctiutil.isLog) console.log(JSON.stringify(data) + '\n');
    //       ctiPage.afterLogic(serviceId, data, channel);
    //     },
    //     failure: function (data) {
    //       if (ctiutil.isLog) console.log('==============================================\n');
    //       if (ctiutil.isLog) console.log(apiUrl + '\n');
    //       if (ctiutil.isLog) console.log(serviceId + '\n');
    //       if (ctiutil.isLog) console.log(rqData + '\n');
    //       if (ctiutil.isLog) console.log("ajax failure. data[" + data.responseText + "]");
    //     },
    //     error: function (data, temp, error) {
    //       if (ctiutil.isLog) console.log('==============================================\n');
    //       if (ctiutil.isLog) console.log(apiUrl + '\n');
    //       if (ctiutil.isLog) console.log(serviceId + '\n');
    //       if (ctiutil.isLog) console.log(rqData + '\n');
    //       if (ctiutil.isLog) console.log("ajax error. data[" + data.responseText + "]");
    //       if (ctiutil.isLog) console.log(temp);
    //       if (ctiutil.isLog) console.log(error);

    //       ctiPage.openModal('알림', '서버 연결에 문제가 있습니다.');

    //     }
    //   });
    // }
  };

  ctiPage.afterLogic = function (serviceId, data, channel = '') {
    if (ctiutil.isNotNvl(data)) {
      ctiPage.transAgentPhone = "";
      ctiPage.transAgentStatus = "";
      ctiPage.transAgentPart = "";

      //********************************
      //afterLogic GetAgentInfo  (swatAgentStatus에서 넘어옴)
      //********************************
      if (serviceId == "GetAgentInfo") {
        if (data.result.totalCount > 0) {
          ctiPage.g_Part  = data.result.list[0].part;
        }
      }

      //********************************
      //afterLogic MuteTransfer (swatAgentStatus에서 넘어옴)
      //********************************
      if (serviceId == "MuteTransfer") {
        if (data.result.totalCount > 0) {
          ctiPage.transAgentPhone = data.result.list[0].phone;
          ctiPage.transAgentStatus = data.result.list[0].status;
          ctiPage.transAgentPart = data.result.list[0].part;
        }
        else {
          ctiPage.transAgentPhone = "";
          ctiPage.transAgentStatus = "";
          ctiPage.transAgentPart = "";
        }

        if (ctiPage.transAgentPhone == "0") {
          //ctiPage.cti_SinglestepTransfer();
        }
        else {
          //ctiPage.openModal ('알림',ctiPage.transAgentStatus);  //alert(ctiPage.transAgentStatus);
          //ctiPage.openModal ('알림',"수신 ");  //alert(ctiPage.transAgentStatus);
        }

        if(ctiPage.transAgentStatus.indexOf('대기') !== -1) {
          ctiPage.cti_MuteTransfer();
        }
        else {
          ctiPage.openModal('알림', '수신대기 상태가 아닙니다.');
        }

        //alert(ctiPage.transAgentStatus);
        //if (data.result.totalCount > 0) {
        //  ctiPage.cti_SinglestepTransfer();
        //}

      }

      //********************************
      //afterLogic SinglestepTransfer (swatAgentStatus에서 넘어옴)
      //********************************
      if (serviceId == "SinglestepTransfer") {
        if (data.result.totalCount > 0) {
          ctiPage.transAgentPhone = data.result.list[0].phone;
          ctiPage.transAgentStatus = data.result.list[0].status;
          ctiPage.transAgentPart = data.result.list[0].part;
        }
        else {
          ctiPage.transAgentPhone = "";
          ctiPage.transAgentStatus = "";
          ctiPage.transAgentPart = "";
        }

        if (ctiPage.transAgentPhone == "0") {
          //ctiPage.cti_SinglestepTransfer();
        }
        else {
          //ctiPage.openModal ('알림',ctiPage.transAgentStatus);  //alert(ctiPage.transAgentStatus);
          //ctiPage.openModal ('알림',"수신 ");  //alert(ctiPage.transAgentStatus);
        }

        if(ctiPage.transAgentStatus.indexOf('대기') !== -1) {
          ctiPage.cti_SinglestepTransfer();
        }
        else {
          ctiPage.openModal('알림', '수신대기 상태가 아닙니다.');
        }

        //alert(ctiPage.transAgentStatus);
        //if (data.result.totalCount > 0) {
        //  ctiPage.cti_SinglestepTransfer();
        //}

      }
      //********************************
      //afterLogic MakeCallDn  (swatAgentStatus에서 넘어옴)
      //********************************
      else if (serviceId == "MakeCallDn") {
        if (data.result.totalCount > 0) {
          ctiPage.transAgentPhone = data.result.list[0].phone;
          ctiPage.transAgentStatus = data.result.list[0].status;
          ctiPage.transAgentPart = data.result.list[0].part;
        }
        if (ctiPage.transAgentPhone == "0") {
        }
        else {
          //ctiPage.openModal ('알림',ctiPage.transAgentStatus);  //alert(ctiPage.transAgentStatus);
          //ctiPage.cti_MuteTransfer();
        }
        ctiPage.cti_MakeCallDn();
        ctiPage.chk_agentState('00', false);


      }
      //********************************
      //afterLogic swatConsultingList (고객상담)
      //********************************
      else if (serviceId == "swatConsultingList") {
        ctiPage.swatConsultingListRs = [];
        if (data.succeedYn == true && ctiutil.isNotNvl(data.result.list)) {
          ctiPage.swatConsultingListRs = ctiutil.sortJSON(data.result.list, "regDt", "desc");
          for (var i = 0; i < ctiPage.swatConsultingListRs.length; i++) {
            ctiPage.swatConsultingListRs[i]['s'] = ctiutil.commonName (ctiPage.swatConsultingListRs[i].mediumClass, ctiPage.swatConsultingListRs[i].consulTelDivi ) + '_'
            + ctiPage.swatConsultingListRs[i].regDt + '_'
            + ctiPage.swatConsultingListRs[i].regNm + '_'
            + ctiPage.swatConsultingListRs[i].ctiCustNm + '_'
            + ctiPage.swatConsultingListRs[i].ctiTelOne + '_'
            + ctiPage.swatConsultingListRs[i].custGd + '_'
            + ctiPage.swatConsultingListRs[i].phoneExtension + '_'
            + ctiPage.swatConsultingListRs[i].mgmDeptNm + '_'
            + ctiPage.swatConsultingListRs[i].userNo + '_'
            + ctiPage.swatConsultingListRs[i].regHs + '_'
            + ctiPage.swatConsultingListRs[i].mediumClass + '_'
            + ctiPage.swatConsultingListRs[i].softOutCall + '_'
            + ctiPage.swatConsultingListRs[i].rervNo + '_'
            + ctiPage.swatConsultingListRs[i].evCd + '_'
            + ctiPage.swatConsultingListRs[i].custNo + '_'
            + ctiPage.swatConsultingListRs[i].mgmDeptCd + '_'
            + ctiPage.swatConsultingListRs[i].recordNo + '_'
            + ctiPage.swatConsultingListRs[i].ctiCustId + '_'
            + ctiPage.swatConsultingListRs[i].ctiTelTwo + '_'
            + ctiPage.swatConsultingListRs[i].largeClass + '_'
            + ctiPage.swatConsultingListRs[i].smallClass + '_'
            + ctiPage.swatConsultingListRs[i].compId + '_'
            + ctiPage.swatConsultingListRs[i].softTransCall + '_'
            + ctiPage.swatConsultingListRs[i].userDeptNm + '_'
            + ctiPage.swatConsultingListRs[i].regId + '_'
            + ctiPage.swatConsultingListRs[i].consulTelDivi + '_'
            + ctiPage.swatConsultingListRs[i].evNm + '_'
            + ctiPage.swatConsultingListRs[i].content;
          }
        }
        ctiPage.cti_swatConsultingListRefresh(channel);
      }

      //********************************
      //afterLogic swatCusConsultingList (고객검색)
      //********************************
      else if (serviceId == "swatCusConsultingList") {
        ctiPage.swatCusConsultingListRs = [];
        if (data.succeedYn == true && ctiutil.isNotNvl(data.result.list)) {
          ctiPage.swatCusConsultingListRs = ctiutil.sortJSON(data.result.list, "regDt", "desc");
          for (var i = 0; i < ctiPage.swatCusConsultingListRs.length; i++) {
            ctiPage.swatCusConsultingListRs[i]['s'] = ctiutil.commonName (ctiPage.swatCusConsultingListRs[i].mediumClass,ctiPage.swatCusConsultingListRs[i].consulTelDivi ) + '_'
            + ctiPage.swatCusConsultingListRs[i].regDt + '_'
            + ctiPage.swatCusConsultingListRs[i].regNm + '_'
            + ctiPage.swatCusConsultingListRs[i].content;
          }
        }
        ctiPage.cti_swatCusConsultingListRefresh();
      }

      //********************************
      //afterLogic swatBookingList (고객상담)
      //********************************
      else if (serviceId == "swatBookingList") {
        ctiPage.swatBookingListRs = [];
        if (data.result.totalCount > 0) {
         if (data.succeedYn == true && ctiutil.isNotNvl(data.result.list)) {
            ctiPage.swatBookingListRs = ctiutil.sortJSON(data.result.list, "firstInsertDatetime", "desc");

            for (var i = 0; i < ctiPage.swatBookingListRs.length; i++) {
              ctiPage.swatBookingListRs[i]['s'] = ctiutil.itemNameSearch (ctiPage.swatBookingListRs[i].itemType ) + '_'
              + ctiPage.swatBookingListRs[i].travelFromDate + '_'
              + ctiPage.swatBookingListRs[i].travelToDate + '_'
              + ctiPage.swatBookingListRs[i].bookingName + '_'
              + ctiPage.swatBookingListRs[i].bookingItemCode + '_'
              + ctiPage.swatBookingListRs[i].bookingStatusName;
            }
         }
        }
        ctiPage.cti_swatBookingListRefresh(channel);
      }

      //********************************
      //afterLogic swatCusBookingList (고객검색)
      //********************************
      else if (serviceId == "swatCusBookingList") {
        ctiPage.swatCusBookingListRs = [];
        if (data.result.totalCount > 0) {
         if (data.succeedYn == true && ctiutil.isNotNvl(data.result.list)) {
            ctiPage.swatCusBookingListRs = ctiutil.sortJSON(data.result.list, "firstInsertDatetime", "desc");

            for (var i = 0; i < ctiPage.swatCusBookingListRs.length; i++) {
              ctiPage.swatCusBookingListRs[i]['s'] = ctiutil.itemName (ctiPage.swatCusBookingListRs[i].itemType ) + '_'
              + ctiPage.swatCusBookingListRs[i].travelFromDate + '_'
              + ctiPage.swatCusBookingListRs[i].travelToDate + '_'
              + ctiPage.swatCusBookingListRs[i].bookingName + '_'
              + ctiPage.swatCusBookingListRs[i].bookingItemCode + '_'
              + ctiPage.swatCusBookingListRs[i].bookingStatusName;
            }
          }
        }
        ctiPage.cti_swatCusBookingListRefresh();
      }

      //********************************
      //afterLogic swatCustomerInfo
      //********************************
      else if (serviceId == "swatSelectCustomerInfo") {
        ctiPage.swatCustomerInfoRs = [];
        if (data.succeedYn == true && ctiutil.isNotNvl(data.result.list)) {
          //if (channel == 'Ringing' && data.totalCount == 1) {
          if (data.result.totalCount == 1) {
            $("#g_usernm").val(data.result.list[0].custNm);
            $("#consul_custNm").val(data.result.list[0].custNm);
            $("#consul_custInfoTypeNm").val(data.result.list[0].custStatNm);
            $("#consul_custTelNo").val(data.result.list[0].telNo);
            $("#consul_custNo").val(data.result.list[0].custNo);
            $("#consul_email").val(data.result.list[0].email);
            $("#consul_custId").val(data.result.list[0].custId);


            //ctiPage.swatCusConsultingList('swatCusConsultingList', ctiPage.swatCustomerInfoRs[0].phone);
            //ctiPage.swatCusBookingList('swatCusBookingList', ctiPage.swatCustomerInfoRs[0].phone);
          }
        }
      }
      //********************************
      //afterLogic swatCustomerInfo (고객찾기)
      //********************************
      else if (serviceId == "swatCustomerInfo") {
        ctiPage.swatCustomerInfoRs = [];
        if (data.succeedYn == true && ctiutil.isNotNvl(data.result.list)) {
          ctiPage.swatCustomerInfoRs = ctiutil.sortJSON(data.result.list, "telNo", "desc");
          for (var i = 0; i < ctiPage.swatCustomerInfoRs.length; i++) {
            ctiPage.swatCustomerInfoRs[i]['phone'] = ctiutil.isNotNvl(ctiPage.swatCustomerInfoRs[i]['telNo']) ? ctiPage.swatCustomerInfoRs[i]['telNo'] : ctiPage.swatCustomerInfoRs[i]['partnerEmpHpNo'];
            ctiPage.swatCustomerInfoRs[i]['s'] = ctiPage.swatCustomerInfoRs[i].custTp  + '_'
            + ctiPage.swatCustomerInfoRs[i].custNo + '_'
            + ctiPage.swatCustomerInfoRs[i].custNm + '_'
            + ctiPage.swatCustomerInfoRs[i].custEngNm + '_'
            + ctiPage.swatCustomerInfoRs[i].birthDt + '_'
            + ctiPage.swatCustomerInfoRs[i].gender + '_'
            + ctiPage.swatCustomerInfoRs[i].partnerEmpHpNo + '_'
            + ctiPage.swatCustomerInfoRs[i].telNo + '_'
            + ctiPage.swatCustomerInfoRs[i].emailAddr + '_'
            + ctiPage.swatCustomerInfoRs[i].zipCd + '_'
            + ctiPage.swatCustomerInfoRs[i].addrOne + '_'
            + ctiPage.swatCustomerInfoRs[i].addrTwo + '_'
            + ctiPage.swatCustomerInfoRs[i].custGdCd + '_'
            + ctiPage.swatCustomerInfoRs[i].custGdNm + '_'
            + ctiPage.swatCustomerInfoRs[i].bussTpCd + '_'
            + ctiPage.swatCustomerInfoRs[i].jobTitle + '_'
            + ctiPage.swatCustomerInfoRs[i].compNo + '_'
            + ctiPage.swatCustomerInfoRs[i].faxNo + '_'
            + ctiPage.swatCustomerInfoRs[i].compZipCd + '_'
            + ctiPage.swatCustomerInfoRs[i].comAddrOne + '_'
            + ctiPage.swatCustomerInfoRs[i].comAddrTwo + '_'
            + ctiPage.swatCustomerInfoRs[i].webCustNo + '_'
            + ctiPage.swatCustomerInfoRs[i].custId + '_'
            + ctiPage.swatCustomerInfoRs[i].custStatNm + '_';
          }

          //ctiPage.cti_customerInfoRefresh(channel);
          if (channel == 'Ringing' && data.result.totalCount == 1) {
            $("#g_usernm").val(data.result.list[0].custNm);
            $("#consul_custNm").val(data.result.list[0].custNm);
            $("#consul_custInfoTypeNm").val(data.result.list[0].custStatNm);
            $("#consul_custTelNo").val(data.result.list[0].phone);
            $("#consul_custNo").val(data.result.list[0].custNo);
          //--ctiPage.swatCusConsultingList('swatCusConsultingList', ctiPage.swatCustomerInfoRs[0].phone);
          //--ctiPage.swatCusBookingList('swatCusBookingList', ctiPage.swatCustomerInfoRs[0].phone);
          }

        }
        else {

        }
        ctiPage.cti_customerInfoRefresh(channel);
      }
      //********************************
      //afterLogic swatCallback
      //********************************
      else if (serviceId == "swatCallback" || serviceId == "swatCallbackRefresh") {
        if (data.succeedYn == true && data.result.totalCount > 0) {
          //$("#b_callback").text("콜백");
          //$("#b_callback").removeAttr("disabled");
          ctiPage.swatCallbackRs = ctiutil.sortJSON(data.result.list, "acceptDt", "desc");
          for (var i = 0; i < ctiPage.swatCallbackRs.length; i++) {
            ctiPage.swatCallbackRs[i]['s'] = ctiPage.swatCallbackRs[i].callbackStatusCd + '_'
              + ctiPage.swatCallbackRs[i].telNo + '_'
              + ctiPage.swatCallbackRs[i].callbackTelNo + '_'
              + ctiPage.swatCallbackRs[i].service + '_'
              + ctiPage.swatCallbackRs[i].counselorUserNm + '_'
              + ctiPage.swatCallbackRs[i].distributorUserNm + '_'
              + ctiPage.swatCallbackRs[i].acceptDt;
          }
          ctiPage.cti_callbackRefresh();
        } else {
          if (serviceId == "swatCallbackRefresh") {
            //$("#b_callback").text("");
            //$("#b_callback").attr("disabled", true);
          }
        }
      }
      //********************************
      //afterLogic swatAgentList
      //********************************
      else if (serviceId == "swatAgentList") {
        if (data.result.totalCount > 0) {
          data.result.list = data.result.list.filter(function (val) { return val.part != '' });
          if (data.result.list.length > 0) {
            ctiPage.swatAgent = ctiutil.sortJSON(data.result.list, "part", "asc");
          }
          for (var i = 0; i < ctiPage.swatAgent.length; i++) {
            ctiPage.swatAgent[i]['s'] = ctiPage.swatAgent[i].name + '_' + ctiPage.swatAgent[i].part + '_' + ctiPage.swatAgent[i].exten + '_' + ctiPage.swatAgent[i].status;
            $('#agentList > tbody:last').append('<tr><td class="align-c">' + ctiPage.swatAgent[i].part + '</td><td class="align-c">' + ctiPage.swatAgent[i].exten + '</td><td class="align-c">' + ctiPage.swatAgent[i].status + '</td><td class="align-c">' + ctiPage.swatAgent[i].name + '</td></tr>');
          };
        }

        const map = new Map();
        $('#agentList-team').empty();
        for (const item of ctiPage.swatAgent) {
          if(!map.has(item.part)){
              map.set(item.part, true);
              $('#agentList-team').append("<option value='"+ item.part +"'>"+ item.part +"</option>");
          }
        }

        $('#agentList-team').val(ctiPage.g_Part).prop("selected","selected");
        if(ctiPage.g_Part.length > 0) {
          ctiPage.cti_agentSearchRefresh (ctiPage.g_Part);
        }
        //로그인시 고객상담 문의부서 정보 설정
        if(channel == 'agentlogin') {
          const consul_map = new Map();
          $('#consul_dept').empty();
          for (const item of ctiPage.swatAgent) {
            if(!consul_map.has(item.part)){
              consul_map.set(item.part, true);
                $('#consul_dept').append("<option value='"+ item.part +"'>"+ item.part +"</option>");
            }
          }
          $('#consul_dept').val(ctiPage.g_Part).prop("selected","selected");
        }

      }
    }
  };

  //(고객상담) 상담내역 그리드 초기화
   ctiPage.cti_swatConsultingListInit = function () {
    $('#consul_consulList> tbody > tr').remove();
    ctiPage.swatConsultingListRs =[];
  };
  //(고객상담) 상담내역 그리드 출력
  ctiPage.cti_swatConsultingListRefresh = function (channel = '') {
      var regex = new RegExp('', "i");
      $('#consul_consulList> tbody > tr').remove();
      $.each(ctiPage.swatConsultingListRs, function (key, val) {
        if (val.s.search(regex) != -1) {
          $('#consul_consulList > tbody:last').append(''
            + '<tr><td class="align-c">' + ctiutil.blank() +  ctiutil.commonName(val.mediumClass,val.consulTelDivi) + '</td>'   //구분
            + '<td class="align-c">' +  val.regDt + " " + val.regHs + '</td>' //상담일시
            + '<td class="align-c">' + val.regNm + '</td>' //상담자
            + '<td class="break">' + val.content + '</td></tr>'); //내용
        }
      });

      if (ctiPage.swatConsultingListRs.length == 0 ) {
        $('#consul_consulList > tbody:last').append('<tr><td class="align-c" colspan="4">데이터를 찾을 수 없습니다.</td></tr>');
      }

  };

  //(고객상담) 상담내역 그리드 출력
  ctiPage.cti_swatConsultingListFilter = function (channel = '', channel2 = '') {
    var regex = new RegExp(channel, "i");
    var regex2 = new RegExp(channel2, "i");
    $('#consul_consulList> tbody > tr').remove();

    $.each(ctiPage.swatConsultingListRs, function (key, val) {
      if (val.s.search(regex) != -1 || val.s.search(regex2) != -1 ) {
        $('#consul_consulList > tbody:last').append(''
          + '<tr><td class="align-c">' + ctiutil.blank() +  ctiutil.commonName(val.mediumClass,val.consulTelDivi) + '</td>'   //구분
          + '<td class="align-c">' +  val.regDt + " " + val.regHs + '</td>' //상담일시
          + '<td class="align-c">' + val.regNm + '</td>' //상담자
          + '<td class="break">' + val.content + '</td></tr>'); //내용
      }
    });

    if (ctiPage.swatConsultingListRs.length == 0 ) {
      $('#consul_consulList > tbody:last').append('<tr><td class="align-c" colspan="4">데이터를 찾을 수 없습니다.</td></tr>');
    }

  };

  // (고객검색) 상담내역 그리드 출력
  ctiPage.cti_swatCusConsultingListRefresh = function (channel = '') {
      var regex = new RegExp('', "i");
      $('#customerSearch_consultList> tbody > tr').remove();
      $.each(ctiPage.swatCusConsultingListRs, function (key, val) {
        $('#customerSearch_consultList > tbody:last').append(''
          + '<tr><td class="align-c">' + val.regDt + " " + val.regHs + '</td>'   //상담일
          + '<td class="align-c">' + val.regNm + '</td>' //상담자
          + '<td class="align-c">' + ctiutil.blank() + ctiutil.commonName(val.mediumClass,val.consulTelDivi) + '</td>' //문의유형
          //+ '<td class="align-c">' + ctiutil.commonSubName(val.smallClass) + '</td>' //문의상세
          + '<td class="break">' + val.content + '</td>' //내용
          + '<td class="align-c">' + ctiutil.categoryName (val.evCd) + '</td>' //행사번호
          + '<td class="align-c">' +  ctiutil.null(val.rervNo) + '</td></tr>');//예약번호
      });

      if (ctiPage.swatCusConsultingListRs.length == 0 ) {
        $('#customerSearch_consultList > tbody:last').append('<tr><td class="align-c" colspan="6">데이터를 찾을 수 없습니다.</td></tr>');
      }

  };

  //(고객상담) / 예약내역 그리드 초기화
  ctiPage.cti_swatBookingListInit = function () {
    $('#consul_bookingList> tbody > tr').remove();
    ctiPage.swatBookingListRs =[];
  };

 //(고객상담) / 예약내역 그리드 출력
  ctiPage.cti_swatBookingListRefresh = function (channel = '') {
      var regex = new RegExp(channel, "i");
      var category = $('#consul_category option:selected').val();
      var regex2 = new RegExp(category, "i");
      var status = $('#consul_bookingStatus option:selected').val();
      var regex3 = new RegExp(status, "i");

      $('#consul_bookingList> tbody > tr').remove();
      $.each(ctiPage.swatBookingListRs, function (key, val) {
        if (val.s.search(regex) != -1) {
          if (val.s.search(regex2) != -1) {
            if (val.s.search(regex3) != -1) {
              $('#consul_bookingList > tbody:last').append('<tr class="align-c"><td>' + val.bookingItemCode + '</td>' //예약번호
                + '<td>' + val.bookingName + '</td>' //상품명
                + '<td>' + val.firstInsertDatetime + '</td>' //예약일
                + '<td>' + val.travelFromDate + '</td>' //출발일
                + '<td>' + ctiutil.blank() + ctiutil.itemName (val.itemType) + ctiutil.blank() + '</td>' //예약아이템
                + '<td>' + ctiutil.blank() + val.name  + '</td>' //예약자
                + '<td>' + val.bookingStatusName + '</td>' //진행상태
                + '<td>' + val.clientCancelDeadline + '</td></tr>'); //취소마감일
            }
          }
        }
      });

      if (ctiPage.swatBookingListRs.length == 0 ) {
        $('#consul_bookingList > tbody:last').append('<tr><td class="align-c" colspan="8">데이터를 찾을 수 없습니다.</td></tr>');
      }

      //$("#tap_consul_consulList").attr("class", "tab-pane");
      //$("#tap_consul_bookingList").attr("class", "tab-pane active");

  };

  //(고객검색)  / 예약내역 그리드 출력
  ctiPage.cti_swatCusBookingListRefresh = function (channel = '') {
       var regex = new RegExp(channel, "i");
        $('#customerSearch_bookingList > tbody > tr').remove();
        $.each(ctiPage.swatCusBookingListRs, function (key, val) {
              $('#customerSearch_bookingList > tbody:last').append('<tr class="align-c"><td>' + val.bookingItemCode + '</td>' //예약번호
                + '<td>' + val.bookingName + '</td>' //상품명
                + '<td>' + val.firstInsertDatetime + '</td>' //예약일
                + '<td>' + val.travelFromDate + '</td>' //출발일
                + '<td>' + ctiutil.blank() + ctiutil.itemName (val.itemType) + '</td>' //예약아이템
                + '<td>' + ctiutil.blank() + val.name + '</td>' //예약자
                + '<td>' + val.bookingStatusName + '</td>' //진행상태
                + '<td>' + val.clientCancelDeadline + '</td></tr>'); //취소마감일
        });

        if (ctiPage.swatCusBookingListRs.length == 0 ) {
          $('#customerSearch_bookingList > tbody:last').append('<tr><td class="align-c" colspan="8">데이터를 찾을 수 없습니다.</td></tr>');
        }

  };

  //콜백리스트 그리드 출력
  ctiPage.cti_callbackRefresh = function (channel = '') {
    $('#callback_telNo').val(channel);
    $('#callbackList> tbody > tr').remove();
    var regex = new RegExp(channel, "i");
    $.each(ctiPage.swatCallbackRs, function (key, val) {
      if (val.s.search(regex) != -1) {
        if ($("#callback_select option:selected").val() == val.callbackStatusCd || $("#callback_select option:selected").val() == '') {
          var appendData = '<tr class="align-c">'
            + '<td>' + val.callbackSeq + '</td>'  //NO
            + '<td>' + val.telNo + '</td>'  //수신번호
            + '<td><button class="btn btn-light btn-icon-only" onclick="ctiPage.openModal (\'알림\', \'수신번호로 전화를 연결하겠습니까?\',\'ctiPage.callbakCall\' , \'' + val.telNo + '\');"><i class="fas fa-phone-alt"></i></button>' + '</td>'  //전화
            + '<td>' + val.callbackTelNo + '</td>' //콜백번호
            + '<td><button class="btn btn-light btn-icon-only" onclick="ctiPage.openModal (\'알림\',\'콜백번호로 전화를 연결하겠습니까?\',\'ctiPage.callbakCall\', \'' + val.callbackTelNo + '\');"><i class="fas fa-phone-alt"></i></button>' + '</td>'  //전화
            + '<td>' + val.service + '</td>' //서비스상세
            + '<td>' + val.distributorUserNm + '</td>' //분배원
            + '<td>' + val.counselorUserNm + '</td>' //상담원
            + '<td>' + ((val.callbackStatusCd == "A") ? "미처리" : "처리완료") + '</td>' //처리상태
            + '<td>' + val.acceptDt + '</td>' //접수일시
            + '<td>' + val.copTime + '</td>' //처리일시
            + '<td>' + val.copTime + '</td>'; //처리시간

          if (val.callbackStatusCd == "A") {
            appendData += '<td><button class="btn btn-light btn-icon-only" onclick="ctiPage.openModal (\'알림\',\'콜백완료 처리하시겠습니까?\',\'ctiPage.callbakCallUpdate\', \'' + val.callbackSeq + '\');"><i>완료</i></button>' + '</td>'  //콜백완료
              + '</tr>';
          }
          else {
            appendData += '<td>' + val.finishDt + '</td>' //완료요청
              + '</tr>';
          }

          $('#callbackList > tbody:last').append(appendData);

        }
      }
    });
  };

  //고객검색 그리드 출력
  ctiPage.cti_customerInfoRefresh = function (channel = '') {
    $('#customerList> tbody > tr').remove();
    var regex = new RegExp('', "i");
    $.each(ctiPage.swatCustomerInfoRs, function (key, val) {
      if (val.s.search(regex) != -1) {
        $('#customerList > tbody:last').append('<tr><td class="align-c">' + (key + 1) + '</td>'   //No
          + '<td class="align-c">' + val.custNo + '</td>' //고객번호
          + '<td class="align-c">' + val.custNm + '</td>' //한글명
          + '<td class="align-c">' + val.birthDt + '</td>' //생년월일
          + '<td class="align-c">' + val.telNo + '</td>' //휴대폰번호
          + '<td class="align-c">' + ctiutil.null(val.partnerEmpHpNo) + '</td>' //전화번호
          + '<td class="align-c">' + val.emailAddr + '</td>' //이메일
          + '<td class="align-c">' + val.custTp + '</td>' //고객구분
          + '<td class="align-c">' + val.webCustNo + '</td>' //웹아이디
          + '<td class="align-c">' + val.custStatNm + '</td></tr>'); //고객상태
      }
    });

    if (ctiPage.swatCustomerInfoRs.length == 0 ) {
      $('#customerList > tbody:last').append('<tr><td class="align-c" colspan="10">데이터를 찾을 수 없습니다.</td></tr>');
    }
  };

  //상담사 그리드 출력
  ctiPage.cti_agentSearchRefresh = function (channel = '') {
    $('#agentList-search').val(channel);
    $('#agentList> tbody > tr').remove();
    var part = '';
    var regex = new RegExp(channel, "i");
    //if(channel == '') {
      $.each(ctiPage.swatAgent, function (key, val) {
        if (val.s.search(regex) != -1) {
          if(part !=  val.part) {
            $('#agentList > tbody:last').append('<tr><td class="align-l" colspan="4"><b>' + val.part + '<b></td></tr>');
          }
          $('#agentList > tbody:last').append('<tr><td class="align-c">' + val.part + '</td><td class="align-c">' + val.exten + '</td><td class="align-c">' + val.status + '</td><td class="align-c">' + val.name + '</td></tr>');
          part = val.part;
        }
     });
   // }
   // else {
   //   $.each(ctiPage.swatAgent, function (key, val) {
   //     if (val.s.search(regex) != -1) {
   //       $('#agentList > tbody:last').append('<tr><td class="align-c">' + val.part + '</td><td class="align-c">' + val.exten + '</td><td class="align-c">' + val.status + '</td><td class="align-c">' + val.name + '</td></tr>');
   //     }
  //   });
  //  }

    //var searchField = channel;
    //$('#agentList> tbody > tr').remove();
    //var regex = new RegExp(searchField, "i");
    //$.each(ctiPage.swatAgent, function (key, val) {
    //  if (val.s.search(regex) != -1) {
    //    $('#agentList > tbody:last').append('<tr><td class="align-c">' + val.part + '</td><td class="align-c">' + val.exten + '</td><td class="align-c">' + val.status + '</td><td class="align-c">' + val.name + '</td></tr>');
    //  }
    //});

  };

  //callback 에서 전화 걸기
  ctiPage.callbakCall = function (callNo) {
    $("#g_destdn").val(callNo);
    ctiPage.chk_route('MakeCallOut');
  };

  //callback 상테 완료 update 처리
  ctiPage.callbakCallUpdate = function (callbackSeq) {
    ctiPage.swatCallbackUpdate('swatCallbackUpdate', callbackSeq);
  };

  //CTI 상담직원 상태 (내선번호)
  ctiPage.swatAgentStatus = function (serviceId) {
    var header = {};
    ctiPage.transAgentPhone = "1";
    ctiPage.transAgentStatus = "확인불가";
    ctiPage.transAgentPart = "";
    ctiPage.transAgentExtensionNo = $("#g_transferdn").val();
     //rsData = ctiPage.SendData ('swat',serviceId,'https://swat.ybtour.co.kr:8443/BT-EMS/webservice/DNWebService.do?type=agent&agentDn=' + ctiPage.transAgentExtensionNo,'get',header,'','');
    var header = { "usertoken": ctiPage.usertoken };
    var data = { "stationTypeCode": "STN01", "currency": "KRW", "language": "KO", "condition": { "exten": ctiPage.transAgentExtensionNo } }
    if(serviceId =="GetAgentInfo") {
      data = { "stationTypeCode": "STN01", "currency": "KRW", "language": "KO", "condition": { "exten": ctiPage.g_Dn } }
    }
    ctiPage.SendData('ota', serviceId, '/admin/user/control/staff/cti', 'post', header, JSON.stringify(data), '');
  };

  //CTI 상담직원 리스트
  ctiPage.swatAgentList = function (serviceId, searchValue = '') {
    var header = {};
    //rsData = ctiPage.SendData ('swat',serviceId,'https://swat.ybtour.co.kr:8443/BT-EMS/webservice/DNWebService.do?type=list' ,'get',header,'',searchValue);
    var header = { "usertoken": ctiPage.usertoken };
    var data = { "stationTypeCode": "STN01", "currency": "KRW", "language": "KO", "condition": { "exten": "" } }
    $('#agentList> tbody > tr').remove();
    ctiPage.SendData('ota', serviceId, '/admin/user/control/staff/cti', 'post', header, JSON.stringify(data), searchValue);
  };

  //고객찾기 API
  //   ctiPage.swatCustomerInfo('swatSelectCustomerInfo', 'customer');
  ctiPage.swatCustomerInfo = function (serviceId, searchValue = '') {
    var header = { "usertoken": ctiPage.usertoken };
    var data = { "stationTypeCode": "STN01", "currency": "KRW", "language": "KO", "condition": {} };
    var birthDt = $("#customer_birth").val().replace(/-/gi, "");
    var custNm = $("#customer_name").val();
    var custId = $("#customer_id").val();
    var custPhone = $("#customer_phone").val();
    var custPhoneFull = $("#customer_phoneFull").val().replace(/-/gi, "");
    var custType = $("#customer_type option:selected").val();
    var channel = ""
    //고객찾기를 통해
    if (searchValue == "customer") {
      channel = "customer";
      if (custNm.length > 0) {
        data.condition.custNm = custNm;
      }
      if (custId.length > 0) {
        data.condition.custId = custId;
      }
      if (birthDt.length > 0) {
        data.condition.birthDt = birthDt;
      }
      if (custPhoneFull.length > 0) {
        data.condition.phoneNo = custPhoneFull;
      }
      else if (custPhone.length > 0) {
        data.condition.phoneNo = custPhone;
      }
    }
    else if( searchValue == "Ringing") {
      data.condition.phoneNo = $("#g_destdn").val();
      channel = "Ringing";
    }
    else {
      data.condition.phoneNo = searchValue;
    }

    $('#customerList> tbody > tr').remove();
    ctiPage.SendData('ota', serviceId, '/admin/user/consultingCall/customer', 'post', header, JSON.stringify(data), channel);
  };

  //고객 상담 |상담 리스트 (상딤내역 조회)
  ctiPage.swatConsultingList = function (serviceId, searchValue = '') {
    var header = { "usertoken": ctiPage.usertoken };
    var data = { "stationTypeCode": "STN01", "currency": "KRW", "language": "KO", "condition": { "ctiTelOne": $("#consul_custTelNo").val(), "ctiTelTwo": $("#consul_custTelNo").val() } };
    var channel = "";

    if (searchValue.length > 0) {
      data.condition.ctiTelOne = searchValue.replace(/-/gi, "");
      data.condition.ctiTelTwo = searchValue.replace(/-/gi, "");
    }
    ctiPage.SendData('ota', serviceId, '/admin/user/consultingCall/list', 'post', header, JSON.stringify(data), channel);
  };

  //고객 상담 |예약리스트 (예약내역 조회)
  ctiPage.swatBookingList = function (serviceId, searchValue = '') {
    var header = { "usertoken": ctiPage.usertoken };
    //var header = { "Authorization": "Bearer 8M7prIuXe0G_1rXK^Z%%6=n!cq-_g68y"};
    //bookingItemCode
    var data = { "language": "KO", "stationTypeCode": "STN01", "currency": "KRW", "condition": { "phoneNo": $("#consul_custTelNo").val() } };
    var channel = "";

    if (serviceId == "swatCusBookingList") {
      $('#customerSearch_bookingList> tbody > tr').remove();
    }
    else {
      $('#consul_bookingList> tbody > tr').remove();
    }

    if (searchValue.length > 0) {
      data.condition.phoneNo = searchValue.replace(/-/gi, "");
      ctiPage.SendData('ota', serviceId, '/cti/admin/user/client', 'post', header, JSON.stringify(data), channel);
    }
  };

  //고객상담 저장
  ctiPage.swatSaveCti = function (serviceId, actionType, contentValue = '') {
    var header = { "usertoken": ctiPage.usertoken };
    //var header = { "Authorization": "gxPxGhnMuh7uRLEwTa2RYBUeA3tb4f7lhepE/CDfjVAA=" };
    //IBC:수신CALL, OBC:발신CALL, CBC:CALLBACK, NOC:무통화상담, NBC:미수신CALL, CBO:챗봇

    if ($("#CallStartTime").val().length != 14) {
      $("#CallStartTime").val(ctiutil.gfn_getTodayTime());
      $("#CallEndTime").val(ctiutil.gfn_getTodayTime());
    } else if ($("#CallStartTime").val().length != 14) {
      $("#CallEndTime").val(ctiutil.gfn_getTodayTime());
    }

    //name="consul_inquiryType" id="consul_inquiryType1"
    //var consul_inquiryTypeValue  = $('input[name="consul_inquiryType"]:checked').val();
    //var consul_inquirySubTypeValue  = $('input[name="consul_inquirySubType"]:checked').val();

    var consul_inquiryTypeValue  = ctiPage.inquiryType;
    var consul_inquirySubTypeValue  = ctiPage.inquirySubType;

    var consul_phoneTypeValue  = $('input[name="consul_phoneType"]:checked').val();

    var consul_dept = $('#consul_dept option:selected').val();
    var consul_category = $('#consul_category option:selected').val();

    //var ctiPage.g_GrpNo = "";// UEI24 고객이 선택 메뉴ID
    //var ctiPage.g_GrpName = "";// UEI4 그룹이름
    //var ctiPage.g_returnSubCode = ""; // UEI22  세부선택코드
    //var ctiPage.g_subMenuName = "";//UEI23  세부선택항목

    $("#consul_content").val($("#consul_content").val() + contentValue);

    //if($("#consul_content").val() == '') {
    //  $("#consul_content").val('상담내역이 없는 건입니다.');
    //}

    var data = {
      "stationTypeCode": "STN01",
      "currency": "KRW",
      "language": "KO",
      "condition": {
        "msgFlag": "N",
        "mediumClass": String(consul_inquiryTypeValue),
        "smallClass": String(consul_inquirySubTypeValue),
        "content": $("#consul_content").val(),
        "evCd": consul_category,
        "rervNo": $("#consul_bookingCode_call").val(),
        "custNm": $("#consul_custNm").val(),
        "telNo": String($("#consul_custTelNo").val()),
        "email": $("#consul_email").val(),
        "consulDivi": String(consul_phoneTypeValue),
        "callMenuId": ctiPage.g_GrpNo,
        "callMenuNm": consul_dept,
        "callSubMenuId": ctiPage.g_returnSubCode ,
        "callSubMenuNm":ctiPage.g_GrpName,
        "softOutCallYn": "N",
        "softTransCallYn": "N",
        "callStartDt": String($("#CallStartTime").val()),
        "callEndDt": String($("#CallEndTime").val())
      }
    };

    //고객상담 창으로 안올때 처리
    if(data.condition.telNo.length == 0) {
      data.condition.telNo = $("#g_destdn").val();
    }

    if (actionType == "default") {
      data.condition.mediumClass = "P";
      data.condition.smallClass = "P11";
      data.condition.consulDivi = "NBC";
      data.condition.content = "미수신 통화 건입니다.";
    }
    else if (actionType == "acw") {
      data.condition.mediumClass = "P";
      data.condition.smallClass = "P11";
      data.condition.consulDivi = "NBC";
      data.condition.content = "부재중 통화 건입니다.";
    }
    else if (actionType == "mutetransfer") {
      data.condition.mediumClass = "P";
      data.condition.smallClass = "P11";
      data.condition.consulDivi = "NBC";
      data.condition.content = "호전환 통화 건입니다.";
    }

    //ctiPage.SendData('ybtour', serviceId, '/cti/insertConsulInfo', 'post', header, JSON.stringify(data), '');
    ctiPage.SendData('ota', serviceId, '/admin/user/consultingCall', 'put', header, JSON.stringify(data), '');

    $("#CallStartTime").val('');
    $("#CallEndTime").val('');

    if (actionType == "save") {

      ctiPage.cti_consultingClose('save');
      $("#consul_custNm").val("");
      $("#consul_custInfoTypeNm").val("");
      $("#consul_custTelNo").val("");
      $("#consul_bookingCode").val("");
      $("#consul_bookingCode_call").val("");
      $("#consul_content").val('');

      ctiPage.g_urgentCustomer = 'N';
      ctiPage.cti_swatConsultingListInit();
      ctiPage.cti_swatBookingListInit();
    }

  };

  ctiPage.swatVeloce = function (serviceId) {
    var header = { "usertoken": ctiPage.usertoken };
    var data = "";
    if ($('#TextThisDn').val() == $('#g_Dn2').val() && $('#TextOtherDn').val().substring(0, 1) == "T") {
      data = "call_id=" + ctiutil.gfn_getToday() + "_" + $('#TextUCID').val() + "_" + $('#TextThisDn').val() + "&cust_tel=&cust_no=&cust_name=&trans_tel=&call_kind=&cust_etc1=Y&cust_etc2=&cust_etc3=&cust_etc4=&cust_etc5=&cust_etc6=&cust_etc7=&cust_etc8=";
      ctiPage.SendData('iframe', serviceId, 'https://veloce.ybtour.co.kr:8181/external/user?version=&' + data, 'get', header, '', '');
    }
  };

  ctiPage.customerListSelect = function (custNo, channel ='') {

    var regex = new RegExp(custNo, "i");
    $.each(ctiPage.swatCustomerInfoRs, function (key, val) {
      if (val.custNo.search(regex) != -1) {
        $("#cust_custNo").val(val.custNo);
        $("#cust_birthDt").val(val.birthDt);
        $("#cust_gender").val(val.gender);
        $("#cust_custNm").val(val.custNm);
        $("#cust_custEngNm").val(val.custEngNm);
        $("#cust_zipCd").val(val.zipCd);
        $("#cust_addrOne").val(val.addrOne);
        $("#cust_bussTpCd").val(val.bussTpCd);
        $("#cust_jobTitle").val(val.jobTitle);
        $("#cust_compNo").val(val.compNo);
        $("#cust_faxNo").val(val.faxNo);
        $("#cust_compZipCd").val(val.compZipCd);
        $("#cust_comAddrOne").val(val.comAddrOne);
        //$("#consul_custNm").val(val.custNm);
        //$("#consul_custInfoTypeNm").val(val.custStatNm);
        //$("#consul_custTelNo").val(val.phone);

        if(channel == "customer") {
          ctiPage.swatConsultingList('swatCusConsultingList', val.phone);
          ctiPage.swatBookingList('swatCusBookingList', val.phone);
        }
        else {
         ctiPage.swatConsultingList('swatConsultingList', val.phone);
         ctiPage.swatBookingList('swatBookingList', val.phone);
        }

      }
      else {
        //ctiPage.cti_swatCusConsultingListRefresh();
        //ctiPage.cti_swatCusBookingListRefresh();
//         ctiPage.swatConsultingList('swatConsultingList', val.phone);
  //       ctiPage.swatBookingList('swatBookingList', val.phone);

      }
    });


  };

  //ctiPage.bookingListSelect = function (bookingCode) {
    //$("#consul_bookingCode").val(bookingCode);
  //};

  ctiPage.consultingListFilter  = function (value, value2) {
    ctiPage.cti_swatConsultingListFilter(value, value2);
  };

  //ctiPage.swatCallback
  ctiPage.swatCallback = function (serviceId) {
    var header = { "usertoken": ctiPage.usertoken };
    var data = {
      "stationTypeCode": "STN01", "currency": "KRW", "language": "KO",
      "condition": { "counselorUserId": ctiPage.g_AgentId, "acceptFromDate": ctiutil.gfn_getBeforeMonthday(), "acceptToDate": ctiutil.gfn_getToday() }
    };
    var from_date = '';
    var to_date = '';

    if ($("#callback_from").val().length == 0) {
      from_date = ctiutil.gfn_getBeforeMonthday2();
      to_date = ctiutil.gfn_getToday2();
      $("#callback_from").val(from_date);
      $("#callback_to").val(to_date);
    }
    else {
      from_date = $("#callback_from").val();
      to_date = $("#callback_to").val();
    }

    data = {
      "stationTypeCode": "STN01", "currency": "KRW", "language": "KO",
      "condition": { "acceptFromDate": from_date.replace(/-/gi, ""), "acceptToDate": to_date.replace(/-/gi, "") }
    };

    $('#callbackList> tbody > tr').remove();
    ctiPage.SendData('ota', serviceId, '/admin/user/consultingCall/callBack', 'post', header, JSON.stringify(data), '');
  };

  //get-info call
  ctiPage.swatGetInfo = function (serviceId) {
     var header = { "usertoken": ctiPage.usertoken };
     var data = {
      "language": "KO",
      "condition": { "stationTypeCode": "STN01" }
     };

     ctiPage.SendData('ota', serviceId, '/user/get-info', 'post', header, JSON.stringify(data), '');
   };

  ctiPage.swatGetInfoCallback = function (serviceId) {
    var header = { "usertoken": ctiPage.usertoken };
    var data = {
      "stationTypeCode": "STN01", "currency": "KRW", "language": "KO",
      "condition": { "counselorUserId": ctiPage.g_AgentId, "acceptFromDate": ctiutil.gfn_getBeforeMonthday(), "acceptToDate": ctiutil.gfn_getToday() }
    };
    var from_date = '';
    var to_date = '';

    if ($("#callback_from").val().length == 0) {
      from_date = ctiutil.gfn_getBeforeMonthday2();
      to_date = ctiutil.gfn_getToday2();
      $("#callback_from").val(from_date);
      $("#callback_to").val(to_date);
    }
    else {
      from_date = $("#callback_from").val();
      to_date = $("#callback_to").val();
    }

    data = {
      "stationTypeCode": "STN01", "currency": "KRW", "language": "KO",
      "condition": { "acceptFromDate": from_date.replace(/-/gi, ""), "acceptToDate": to_date.replace(/-/gi, "") }
    };

    $('#callbackList> tbody > tr').remove();
    ctiPage.SendData('ota', serviceId, '/admin/user/consultingCall/callBack', 'post', header, JSON.stringify(data), '');
  };

  //ctiPage.swatCallbackUpdate
  ctiPage.swatCallbackUpdate = function (serviceId, callbackSeq) {
    var header = { "usertoken": ctiPage.usertoken };
    var data = {
      "stationTypeCode": "STN01", "currency": "KRW", "language": "KO",
      "condition": { "callbackSeq": callbackSeq }
    };
    ctiPage.SendData('ota', serviceId, '/admin/user/consultingCall/callBack', 'put', header, JSON.stringify(data), '');
  };

  //ctiPage.Ringing
  ctiPage.Ringing = function (data) {

    //var g_GrpNo = "";// UEI24 고객이 선택 메뉴ID
    //var g_GrpName = "";// UEI4 그룹이름
    //var g_returnSubCode = ""; // UEI22  세부선택코드
    //var g_subMenuName = "";//UEI23  세부선택항목
    // 1 : 예약문의
    // 2 : 변경취소문의
    // 3 : 결제문의(예약)
    // 4 : 여행정보문의
    // 5 : 결제문의(항공)
    // 6 : 변경문의
    // 7 : 취소/환불문의(항공)
    // 8 : 단체항공권문의
    // 9 : 기타문의

    //1.결제문의
    //2번.변경문의
    //3번.취소환불문의
    //4번 기타문의

    //ctiPage.g_GrpNo = "";
    //ctiPage.g_GrpName = "";
    //ctiPage.g_returnSubCode = "";
    //ctiPage.g_subMenuName = "";
    //ctiPage.g_ANI = "";

    // UEI1 -> CTI큐 번호	UEI1	g_QueueDN		4	O		고객 선택한 CTI큐(헌트) 번호
    // UEI2 -> 시나리오 재접속여부	UEI2	g_FlagQTrans		1	O		시나리오 재접속 여부 1:재접속 0:최초인입
    // UEI3 -> 상담대기 카운트	UEI3	g_QLoopCnt 		1	O		"호대기시간에 따른 콜백여부 카운트
    //         (0:최초인입 1~2: 시나리오 재진입 카운트)"
    // UEI4 -> 그룹이름	UEI4	g_GrpName			O		Queue 명(그룹명)
    // UEI5 -> DNIS번호	UEI5	g_DNIS			O		DNIS번호
    // UEI6 -> ANI번호	UEI6	g_ANI 		14	O		ANI번호
    // UEI7 -> 선택메뉴코드	UEI7	g_SVCCode			O		시나리오 SVC Code값(선택메뉴코드)
    // UEI8 -> 서비스명	UEI8	g_SVCName			O		시나리오 SVC Name값(서비스명)
    // UEI9 -> 테넌트이름	UEI9	g_TennantName			O		테넌트네임(ybtour고정)
    // UEI10 -> 근무시간코드		l_IsWorkingTime		1	O		"l_IsWorkingTime  -근무시간코드
    // 1 : 근무시간
    // 2 : 당직실
    // 3 : 토요일 09:00 ~ 1500
    // 4 : 토요일 15:00 ~ , 일요일
    // 5 : 항공근무외시간
    // 6 : 예약 일반외시간
    // 7 : 팀/개인직통 근무외시간"
    //   UEI11
    //   UEI12
    //   UEI13
    //   UEI14
    //   UEI15
    //   UEI16
    //   UEI17
    //   UEI18
    // UEI19 -> 특별고객구분항목	UEI19	g_VipFlag		1	O		0:일반 1:VIP
    // UEI20 -> 콜백 메뉴 이름	UEI20	g_CallbackName			O
    // UEI21 -> DNIS 변환번호	UEI21	g_sessionDnis		4	O		"8850 : 대표예약번호
    //          8851 : 대표항공번호
    //          8852 : 팀직통번호
    //          8853 : 개인직통번호
    //          8854 : 테스트번호
    //          8855 : 마케팅번호
    //          8856 : OTA항공번호"
    // UEI22 -> 세부선택코드	UEI22	g_returnSubCode		1	O		"1 : 결제문의
    //                                                      2 : 변경문의
    //                                                     3 : 취소/환불문의
    //                                                    4 : 기타문의"
    // UEI23 -> 세부선택항목	UEI23	g_subMenuName		20	O		"1 : 결제문의
    //                                                    2 : 변경문의
    //                                                    3 : 취소/환불문의
    //                                                  4 : 기타문의"
    // UEI24 -> 메뉴  ID	UEI24	g_GrpNo		4	O		고객이 선택 메뉴ID
    // UEI25 -> 긴급고객여부	UEI25	g_fastTF		4	O		"긴급고객여부
    //                                              Y : 긴급고객
    //                                              N : 일반고객"
    // UEI26 < ---- 예약번호

    ctiFunc.ClearDisplayInfo();

    var jsonData = JSON.parse(data);
    if (ctiutil.isLog) console.log(data);
    if (ctiutil.isLog) console.log(jsonData);
    ctiPage.sTelType = "IBC";
    ctiPage.g_GrpNo = ctiutil.arrayVal(jsonData.UEI24, '');
    ctiPage.g_GrpName = ctiutil.arrayVal(jsonData.UEI4, '');
    ctiPage.g_returnSubCode = ctiutil.arrayVal(jsonData.UEI22, '');
    ctiPage.g_subMenuName = ctiutil.arrayVal(jsonData.UEI23, '');
    ctiPage.g_ANI = ctiutil.arrayVal(jsonData.UEI6, '');
    ctiPage.g_urgentCustomer = ctiutil.arrayVal(jsonData.UEI25, '');
    ctiPage.g_BookingCode = ctiutil.arrayVal(jsonData.UEI26, '');

    //메뉴선택
    $("#consul_category").val(ctiPage.g_GrpNo).prop("selected", true);

    //console.log(ctiutil.arrayVal(jsonData.UEI7, ''));
    //console.log(ctiutil.arrayVal(jsonData.UEI8, ''));


    //선택메뉴코드	UEI7	g_SVCCode
    //서비스명	UEI8	g_SVCName
    //$('#consul_dept').val(ctiPage.g_GrpName).prop("selected","selected");
    $("#g_destdn").val(ctiPage.g_ANI);
    $("#customer_phoneFull").val(ctiPage.g_ANI);
    $("#consul_callerTelNo").val(ctiPage.g_ANI);
    $("#consul_bookingCode").val("");
    $("#consul_bookingCode_call").val("");

    //ctiPage.ckReservationlistBookingCode) this.reservationListRedirect('bookingCode', '123123');
    //ctiPage.cksReservationlistPhoneNo = true;
    //ctiPage.ckReservationlistBookingCode = false;
    //ctiPage.cksReservationlistValue = g_ANI;

    ctiPage.RingingEvent(ctiPage.g_GrpNo,ctiPage.g_GrpName,ctiPage.g_returnSubCode,ctiPage.g_subMenuName,ctiPage.g_ANI,ctiPage.g_urgentCustomer, ctiPage.g_BookingCode);
    //ctiutil.popBookingList(ctiPage.g_ANI ,false);

    //ctiutil.popBookingDetail (ctiPage.g_ANI,false);
    //$("#g_destdn").trigger('click');
    //ctiPage.callBookingListFromPhoneNo(g_ANI);
    ctiPage.swatCustomerInfo('swatCustomerInfo', 'Ringing');
  };

  ctiPage.RELEASED = function (data) {

    ctiFunc.ClearDisplayInfo();

    var g_ANI = ""; // UEI6 ANI번호  (고객번호)
    ctiPage.sTelType = "";
    ctiPage.g_GrpNo = "";
    ctiPage.g_GrpName = "";
    ctiPage.g_returnSubCode = "I";
    ctiPage.g_subMenuName = "I01";
    ctiPage.g_ANI ="";
    ctiPage.g_urgentCustomer ="";

    $("#g_destdn").val(ctiPage.g_ANI);
    $("#g_usernm").val('');
    $("#customer_phoneFull").val(ctiPage.g_ANI);
    $("#consul_callerTelNo").val(ctiPage.g_ANI);

  };

  ctiPage.RingingEvent = function (g_GrpNo, g_GrpName, g_returnSubCode, g_subMenuName, g_ANI, g_urgentCustomer, g_BookingCode) {
    //받기 활성화

    //잠시 주석
    //class="btn-cti type3"
    //$('#b_AnswerCall').attr('class', 'tn-cti type3 outline-red');

    //alert(  g_GrpNo + '/' + g_GrpName + '/' + g_returnSubCode + '/' +  g_subMenuName + "/" + g_ANI)
    //if(g_urgentCustomer == 'Y') {
    //  ctiPage.openModal('알림',  g_GrpName + '(' + g_GrpNo + ',' + g_returnSubCode  + ')/' + g_subMenuName + "/" + g_ANI,'ctiPage.chk_route','AnswerCall','받기');
   // }
   // else {
   //   ctiPage.openModal('알림',  g_GrpName + '(' + g_GrpNo + ',' + g_returnSubCode  + ')/' + g_subMenuName + "/" + g_ANI,'ctiPage.chk_route','AnswerCall','받기');
   // }
  };

  ctiPage.openModal = function (titile, content, action = '', actionValue = '', alert_action_text ='') {
    var modal = $("#modal_alert");
    $("#alert_title").text(titile);
    $("#alert_content").text(content);

    //action이 없으면 닫기만 존재한다.
    if (action.length == 0) {
      $("#alert_type_confirm").attr('style', 'visibility: hidden');
      $('#alert_type_close').removeAttr('style');
    }
    else {
      $("#alert_type_close").attr('style', 'visibility: hidden');
      $('#alert_type_confirm').removeAttr('style');
      if( actionValue == 'AnswerCall') {
        action += '(\'' + actionValue + '\');ctiPage.closeModal();ctiPage.cti_consulting();return false;';
      }
      else {
        action += '(\'' + actionValue + '\');ctiPage.closeModal();return false;';
      }
      $("#alert_action").attr('onclick', action);
    }

    if (alert_action_text.length > 0) {
     $("#alert_action").text(alert_action_text);
    }

    modal.addClass('active');

    if (action.length == 0) {
      var aFormElement = document.getElementById("alert_close");
      aFormElement.focus();
    }
    else {
      var aFormElement = document.getElementById("alert_action");
      aFormElement.focus();
    }

  }

  ctiPage.closeModal = function () {
    var modal = $("#modal_alert");
    modal.removeClass('active');
    $("#alert_title").text('');
    $("#alert_content").text('');
  }

})((window.ctiPage = {}));
