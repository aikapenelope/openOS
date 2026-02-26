export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      portalAccess?: boolean;
    };
  }
}
