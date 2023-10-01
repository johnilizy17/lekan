import { authService } from "../utils/auth";


async function instance(e: string) {
	if (e) {
		authService.defaults.headers.common["Authorization"] = `Bearer ${e}`;
	}
}

export const RegisterUser = async (data) => {
	return authService.post(`register`, data);
};

export const LoginUser = async (data) => {
	return authService.post(`login`, data);
};

export const RegisterReferral = async (data) => {
	return authService.post(`users/referral`, data);
};

export const getChat = async (id) => {
	return authService.get(`chats/${id}`);
};

export const postChat = async (data) => {
	return authService.post(`chat`, data);
};

export const getAsset = async (id) => {
	return authService.get(`mints/${id}`,);
};

export const getSearchDocument = async (id) => {
	return authService.get(`mint/result/search?search=${id}`,);
};


export const getDocumentByID = async (id) => {
	return authService.get(`document/${id}`);
};

export const getAllAttendance = async () => {
	return authService.get(`reports`);
};

export const getMyAttendance = async () => {
	const token = localStorage.getItem("token");
	await instance(token)
	return authService.get(`user_reports/user/user_reports`)
}

export const getNotification = async (id) => {
	return authService.get(`notification/${id}`)
}


export const updateUserInformation = async (id, data) => {
	return authService.put(`user/${id}`, data)
}

export const updateMintVisible = async (id, data) => {
	return authService.put(`mint/update/${id}`, data)
}

export const getUserreferral = async (id) => {
	return authService.get(`user/referral/${id}`)
}

export const getUserreferralBy = async (id) => {
	return authService.get(`user/referralBy/${id}`)
}


export const getReward = async (id) => {
	return authService.get(`rewards/${id}`)
}

export const postReward = async (id, data) => {
	return authService.post(`rewards/${id}`, data)
}

export const getUserReward = async (id) => {
	return authService.get(`user/reward/${id}`)
}